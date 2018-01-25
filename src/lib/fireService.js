import firebase from 'firebase'

var fDb, fApp

export function init (mode) {
  if (mode === 'admin') {
    var fadminModule = 'firebase-admin'
    var admin = require(`${fadminModule}`) // 由於直接 require 會有 eslint 報警告，所以改用間接引用。
    // 上述寫法參考：https://github.com/webpack/webpack/issues/196
    var serviceAccount = require('../../account/firebaseAdminKey.json')
    fApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://ccc-urspace.firebaseio.com'
    })
  } else {
    fApp = firebase.initializeApp({
      apiKey: 'AIzaSyCmc44S50DGj-f9LbagNPLgnVHHaphIZhI',
      authDomain: 'ccc-urspace.firebaseapp.com',
      databaseURL: 'https://ccc-urspace.firebaseio.com',
      projectId: 'ccc-urspace',
      storageBucket: '',
      messagingSenderId: '1023578722292'
    })
  }
  fDb = fApp.database()
}

export function stop () {
  return fApp.delete()
}

export async function googleLogin () {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const result = await firebase.auth().signInWithPopup(googleProvider)
  return result.user
}

export const db = {}

db.TIMESTAMP = firebase.database.ServerValue.TIMESTAMP

db.clear = async function () {
  return db.setByPath('/', {})
}

db.addByPath = async function (path, value) {
  let ref = fDb.ref(path)
  var key = ref.push().key
  value.key = key
  var command = {}
  command[key] = value
  await ref.update(command)
  return key
}

db.getByPath = async function (path) { // q = {table, orderBy, start, end, limit, desc=false }
  var ref = fDb.ref(path)
  const snapshot = await ref.once('value')
  return snapshot.val()
}

db.setByPath = async function (path, value) {
  return fDb.ref(path).set(value)
}

db.queryByPath = async function (path, q) { // q = {table, orderBy, start, end, limit, desc=false }
  var ref = fDb.ref(path)
  ref = (q.orderBy != null) ? ref.orderByChild(q.orderBy) : ref.orderByKey()
  ref = (q.start != null) ? ref.startAt(q.start) : ref
  ref = (q.end != null) ? ref.endAt(q.end) : ref
  let limit = q.limit || 9999999
  ref = (q.sort === 'desc') ? ref.limitToLast(limit) : ref.limitToFirst(limit)
  const snapshot = await ref.once('value')
  return snapshot
}

db.getRecord = async function (table, key) {
  return db.getByPath(`/${table}/${key}`)
}

db.setRecord = async function (table, key, record) {
  record.time = record.time || db.TIMESTAMP // 所有訊息都要有時間戳記
  return db.setByPath(`/${table}/${key}`, record)
}

db.addRecord = async function (table, record) {
  record.time = record.time || db.TIMESTAMP // 所有訊息都要有時間戳記
  return db.addByPath('/' + table + '/', record) // return key (in promise)
}

function recursiveAddRecord (obj, recordList, recordChecker) {
  if (obj == null || typeof obj !== 'object') return
  if (recordChecker(obj)) {
    recordList.push(obj)
  } else {
    let childList = Object.values(obj)
    for (let child of childList) {
      recursiveAddRecord(child, recordList, recordChecker)
    }
  }
}

db.queryRecord = async function (table, q, recordChecker) {
  let snapshot = await db.queryByPath('/' + table + '/', q)
  let tree = JSON.parse(JSON.stringify(snapshot)) // snapshot 似乎有引用迴圈，但印出來卻沒看到，所以我們用這行把迴圈去掉
  console.log('tree=%s', JSON.stringify(tree, null, 2))
  let recordList = []
  recursiveAddRecord(tree, recordList, recordChecker)
  if (q.sort === 'desc') { // firebase query orderBy 之後排序似乎沒有真正落實，只好自己重排一次。
    recordList.sort((a, b) => a[q.orderBy] < b[q.orderBy])
  } else {
    recordList.sort((a, b) => a[q.orderBy] > b[q.orderBy])
  }
  return recordList
}

export default {
  db: db,
  firebase: firebase,
  googleLogin: googleLogin,
  init: init
}

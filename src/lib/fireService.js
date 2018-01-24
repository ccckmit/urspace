import firebase from 'firebase'

var fDb, fApp

export function init (mode) {
  if (mode === 'admin') {
    var admin = require('firebase-admin')
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

db.addByPath = async function (path, value) {
  let ref = fDb.ref(path)
  var key = ref.push().key
  value.key = key
  var command = {}
  command[key] = value
  ref.update(command)
  return key
}

db.getByPath = async function (path) { // q = {table, orderBy, start, end, limit, desc=false }
  var ref = fDb.ref(path)
  const snapshot = await ref.once('value')
  return snapshot.val()
}

db.setByPath = async function (path, value) {
  fDb.ref(path).set(value)
}

db.queryByPath = async function (path, q) { // q = {table, orderBy, start, end, limit, desc=false }
  var ref = fDb.ref(path).orderByChild(q.orderBy)
  ref = (q.start != null) ? ref.startAt(q.start) : ref
  ref = (q.end != null) ? ref.endAt(q.end) : ref
  ref = (q.sort === 'desc') ? ref.limitToLast(q.limit) : ref.limitToFirst(q.limit)
  const snapshot = await ref.once('value')
  // console.log('snapshot=', snapshot)
  const kvList = []
  snapshot.forEach(function (childSnapshot) {
    kvList.push({key: childSnapshot.key, value:childSnapshot.val()})
  })
  // console.log('query:q=%j list=%j', q, list)
  if (q.sort === 'desc') kvList.reverse()
  return kvList
}

db.getRecord = async function (table, key) {
  return db.getByPath(`/table/${table}/${key}`)
}

db.setRecord = async function (table, key, record) {
  record.time = record.time || db.TIMESTAMP // 所有訊息都要有時間戳記
  return db.setByPath(`/table/${table}/${key}`, record)
}

db.addRecord = async function (table, record) {
  record.time = record.time || db.TIMESTAMP // 所有訊息都要有時間戳記
  return db.addByPath('/table/' + table + '/', record) // return key (in promise)
}

db.queryRecord = async function (table, q) {
  return db.queryByPath('/table/' + table + '/', q)
}

export default {
  db: db,
  firebase: firebase,
  googleLogin: googleLogin,
  init: init
}

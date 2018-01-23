import firebase from 'firebase'

var fDb, fApp

export function init (mode) {
  if (mode === 'admin') {
    var admin = require('firebase-admin')
    var serviceAccount = require('../account/firebaseAdminKey.json')
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

export async function googleLogin () {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const result = await firebase.auth().signInWithPopup(googleProvider)
  return result.user
}

export const db = {}

db.TIMESTAMP = firebase.database.ServerValue.TIMESTAMP

db.add = async function (table, record) {
  let ref = fDb.ref('/' + table + '/')
  var key = ref.push().key
  var command = {}
  command[key] = record
  return ref.update(command)
}

db.get = async function (path) { // q = {table, orderBy, start, end, limit, desc=false }
  var ref = fDb.ref(path)
  const snapshot = await ref.once('value')
  return snapshot.val()
}

db.query = async function (q) { // q = {table, orderBy, start, end, limit, desc=false }
  var ref = fDb.ref('/' + q.table + '/').orderByChild(q.orderBy)
  ref = (q.start != null) ? ref.startAt(q.start) : ref
  ref = (q.end != null) ? ref.endAt(q.end) : ref
  ref = (q.sort === 'desc') ? ref.limitToLast(q.limit) : ref.limitToFirst(q.limit)
  const snapshot = await ref.once('value')
  const list = []
  snapshot.forEach(function (childSnapshot) {
    list.push(childSnapshot.val())
  })
  console.log('query:q=%j list=%j', q, list)
  if (q.sort === 'desc') list.reverse()
  return list
}

export default {
  db: db,
  firebase: firebase,
  googleLogin: googleLogin,
  init: init
}

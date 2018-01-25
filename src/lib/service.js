import service from './fireService'

export default service
export const db = service.db

db.addUser = async function (user) {
  return db.addRecord('user', user)
}

db.setUser = async function (user) {
  return db.setRecord('user', user.uid, user)
}

db.getUser = async function (uid) {
  return db.getRecord('user', uid)
}

db.addLink = async function (link) {
  return db.addRecord('link', link)
}

db.setLink = async function (link) {
  return db.setRecord('link', link.path, link)
}

db.getLink = async function (path) {
  return db.getRecord('link', path)
}

// ======================== msg (domain, user) ==================

db.addMessage = async function (msg) {
  let mid = await db.addRecord(`message/${msg.domain}`, msg)
  db.setByPath(`/user/${msg.uid}/domain/${msg.domain}/${mid}`, msg)
  return mid
}

db.setMessage = async function (msg) {
  db.setRecord(`message/${msg.domain}`, msg.mid, msg)
  db.setByPath(`/user/${msg.uid}/domain/${msg.domain}/${msg.mid}`, msg)
}

db.getMessage = async function (msg) {
  return db.getRecord(`message/${msg.domain}`, msg.mid)
}

db.queryMessage = async function (q) {
  q.domain = q.domain || 'all'
  if (q.domain === 'all') q.domain = ''
  q.uid = q.uid || ''
  let table = (q.uid === '') ? `message/${q.domain}` : `user/${q.uid}/domain/${q.domain}`
  let messageList = await db.queryRecord(table, q, (o) => o.content != null)
  return messageList
}

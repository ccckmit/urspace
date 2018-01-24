import service from './fireService'

export default service
export const db = service.db

db.getRecord = async function (table, key) {
  return db.getByPath(`/table/${table}/${key}`)
}

db.setRecord = async function (table, key, record) {
  record.time = record.time || db.TIMESTAMP // 所有訊息都要有時間戳記
  return db.setByPath(`/table/${table}/${key}`, record)
}

db.addRecord = async function (table, record) {
  record.time = record.time || db.TIMESTAMP // 所有訊息都要有時間戳記
  db.addByPath('/table/' + table + '/', record)
}

db.queryRecord = async function (table, q) {
  return db.queryByPath('/table/' + table + '/', q)
}

db.setUser = async function (user) {
  return db.setRecord('user', user.uid, user)
}

db.getUser = async function (uid) {
  return db.getRecord('user', uid)
}

db.addMessage = async function (message) {
  return db.addRecord('message', message)
}

db.setMessage = async function (message) {
  return db.setRecord('message', message.mid, message)
}

db.getMessage = async function (mid) {
  return db.getRecord('message', mid)
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

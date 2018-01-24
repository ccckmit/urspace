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

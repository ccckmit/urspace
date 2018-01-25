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

function recursiveAddMessage (obj, messageList) {
  // console.log('obj=%j typeof=%s', obj, typeof obj)
  if (typeof obj !== 'object') return
  if (obj.content != null) {
    messageList.push(obj)
  } else {
    let childList = Object.values(obj)
    for (let child of childList) {
      recursiveAddMessage(child, messageList)
    }
  }
}

db.queryMessage = async function (q) {
  q.domain = q.domain || 'all'
  if (q.domain === 'all') q.domain = ''
  q.uid = q.uid || ''
  let path = (q.uid === '') ? `/message/${q.domain}` : `/user/${q.uid}/domain/${q.domain}/`
  let kvList = await db.queryByPath(path, q) // `/message/${q.domain}`
  // console.log('kvList=%j', kvList)
  // console.log('db.queryMessage: path=%s q=%j kvList.length=%d', path, q, kvList.length)
  let messageList = []
  for (let kv of kvList) {
    // console.log('kv.value=%j typeof=%s', kv.value, typeof kv.value)
    recursiveAddMessage(kv.value, messageList)
    // process.exit(1)
    /*
    let message = kv.value.time ? kv.value : Object.values(kv.value)[0] // kv in format {key:xxx, value:message} or {key:xxx, value:{mid: message}} ?
    messageList.push(message)
    */
  }
  // console.log('q=', q)
  if (q.sort === 'desc') { // firebase query orderBy 之後排序似乎沒有真正落實，只好自己重排一次。
    messageList.sort((a, b) => a[q.orderBy] < b[q.orderBy])
  } else {
    messageList.sort((a, b) => a[q.orderBy] > b[q.orderBy])
  }
  // console.log('messageList.length=', messageList.length)
  return messageList
}

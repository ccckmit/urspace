const debug = true

const shared = {}
export default shared

/*
shared.init = function () {
  const userJson = sessionStorage.getItem('urspace_user')
  shared.user = userJson ? JSON.parse(userJson) : null
  shared.language = sessionStorage.getItem('urspace_language')
}
*/

shared.init = function () {
  shared.loadVar('user')
  shared.loadVar('language')
}

shared.loadVar = function (name) {
  const json = sessionStorage.getItem('urspace_' + name) // ""tw""
  console.log('loadVar: json=', json)
  this[name] = json ? JSON.parse(json) : null // "tw"
}

shared.saveVar = function (name, value) {
  sessionStorage.setItem('urspace_' + name, JSON.stringify(value))
}

shared.clearVar = function (name) {
  if (debug) console.log('clearVar:', name)
  this[name] = null
  sessionStorage.removeItem('urspace_' + name)
}

shared.setVar = function (name, value) {
  if (debug) console.log('setVar: %s=%s', name, value)
  this[name] = value
  this.saveVar(name, value)
//  sessionStorage.setItem('urspace_' + name, JSON.stringify(obj))
}

shared.isLogin = function () {
  return (this.user != null)
}

shared.init()

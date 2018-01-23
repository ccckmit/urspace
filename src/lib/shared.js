const debug = true

const shared = {}
export default shared

shared.init = function () {
  shared.loadVar('user')
  shared.loadVar('language')
  console.log('shared:user=', shared.user)
}

shared.loadVar = function (name) {
  const json = sessionStorage.getItem('urspace_' + name) // ""tw""
  console.log('loadVar: json=', json)
  this[name] = (json != null) ? JSON.parse(json) : undefined // "tw"
}

shared.saveVar = function (name, value) {
  sessionStorage.setItem('urspace_' + name, JSON.stringify(value))
}

shared.clearVar = function (name) {
  if (debug) console.log('clearVar:', name)
  this[name] = undefined
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

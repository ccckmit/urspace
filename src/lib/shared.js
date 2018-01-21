const debug = true
const userJson = sessionStorage.getItem('urspace_user')

const shared = {}
export default shared

shared.user = userJson ? JSON.parse(userJson) : null
shared.language = sessionStorage.getItem('urspace_language')

shared.setVar = function (name, obj) {
  if (debug) console.log('setVar:', obj)
  this[name] = obj
  sessionStorage.setItem('urspace_' + name, JSON.stringify(obj))
}

shared.clearVar = function (name) {
  if (debug) console.log('clearVar:', this[name])
  this[name] = null
  sessionStorage.removeItem('urspace_' + name)
}

shared.isLogin = function () {
  return (this.user != null)
}

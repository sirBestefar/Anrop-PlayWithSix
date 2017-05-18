var guidToBase64 = require('./guid_to_base64')

var BASE_URL = 'http://withsix.com/p/Arma-3/mods/'

module.exports = function (mod) {
  var base64 = guidToBase64(mod.id, true)
  var id = base64.substring(0, 22).replace(/\//g, '_').replace(/\+/g, '-')
  return BASE_URL + id
}

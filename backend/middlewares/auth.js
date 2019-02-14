
const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = async function(req, res) {
  if (req.raw.url.match(/^\/api\//) && req.query.key) {
    var user = await User.findByAPIKey(req.query.key)
    if (user) {
      req.user = user
      req.apiKey = req.query.key
      return
    }
    else {
      return res.code(401).send({msg: 'Invalid API Key'})
    }
  }
  else if (!req.headers['x-auth-token'] || !req.cookies.token || req.headers['x-auth-token'] !== req.cookies.token) {
    return
  }

  var userToken = req.cookies.token
  var decoded = await jwtDecode(userToken)
  if (!decoded || !decoded._id) {
    return
  }

  var session = await UserSessions.findById(decoded._id).exec()
  // if session is expired or flagged as requiring a fresh login
  if (!session || session.requireLogin || session.expires < +new Date()) {
    return
  }

  // if session is found then lookup user and set req.user
  var user = await User.findById(session.UID).exec()
  if (user) {
    req.user = user
    req.user.SID = session._id
    req.user.isAdmin = user.roles.isAdmin
  }
  return 
}

async function jwtDecode(token) {
  return new Promise((resolve) => {
    try {
      jwt.verify(token, config.jwtSecret, function(err, decoded) {
        if (err) {
          return resolve(false)
        }
        return resolve(decoded)
      })
    }
    catch (e) {
      return resolve(false)
    }
  })
}
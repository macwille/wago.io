const cronTasks = require('../helpers/cronTasks')

module.exports = function (fastify, opts, next) {
  // Allow github webhook to post and trigger addon update task
  fastify.post('/tasks/addons', async (req, res) => {
    if (!req.headers['user-agent'].match(/^GitHub-Hookshot\//) ) {
      return res.code(403).send({error: 'invalid_access'})
    }
    cronTasks.UpdateLatestAddonReleases(req)
    res.send({done: true})
  })

  next()
}
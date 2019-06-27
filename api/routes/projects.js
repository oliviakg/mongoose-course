const Project = require('../../models/project');

module.exports = function (router) {
  // GET: List of active projects
  router.get('/projects', (req, res) => {

  });

  // POST: Create new project

  router.post('/projects', (req, res) => {
    const project = new Project(req.body);
    project.save((err, project) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(project);
    });
  });
};

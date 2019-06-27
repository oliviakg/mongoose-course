
const TeamMember = require('../../models/teamMember');

module.exports = function TeamRouter(router) {
  // GET: list of Team Members
  router.get('/team', (req, res) => {
    TeamMember.find()
      .sort({ name: 1 })
      .exec()
      .then(docs => res.status(200).json(docs))
      .catch(err => res.status(500).json({
        message: 'Error finding team members',
        error: err,
      }));
  });

  // POST: Create new TeamMember
  router.post('/team', (req, res) => {
    const member = new TeamMember(req.body);
    member.save((err, newMember) => {
      if (err) {
        res.status(400).json(err);
      }
      res.status(200).json(newMember);
    });
  });
};


const TeamMember = require('../../models/teamMember');

module.exports = function (router) {
  // GET: list of Team Members
  router.get('/team', (req, res) => {

  });

  // POST: Create new TeamMember
  router.post('/team', (req, res) => {
    const member = new TeamMember(req.body);
    member.save((err, member) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(member);
    });
  });
};

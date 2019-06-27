const mongoose = require('mongoose');
const Standup = require('../../models/standup');

module.exports = function StandupRouter(router) {
  // GET: the 12 newest standup meeting notes
  router.get('/standup', (req, res) => {
    Standup.find().sort({ createdOn: 1 })
      .exec()
      .then(docs => res.status(200).json(docs))
      .catch(err => res.stats(500).json({
        message: 'Error finding standup meeting',
        error: err,
      }));
  });

  // GET: by team member id
  router.get('/standup/:teamMemberId', (req, res) => {
    const qry = {
      _teamMemberId: mongoose.Types.ObjectId(req.params.teamMemberId),
    };
    Standup.find(qry)
      .sort({ createdOn: 1 })
      .exec()
      .then(docs => res.status(200).json(docs))
      .catch(err => res.status(500).json({
        message: 'Error finding standup notes for the team member id',
        error: err,
      }));
  });

  // POST: the new meeting note document..

  router.post('/standup', (req, res) => {
    const standup = new Standup(req.body);
    standup.save((err, newStandup) => {
      if (err) {
        res.status(400).json(err);
      }
      res.status(200).json(newStandup);
    });
  });
};

const Standup = require('../../models/standup');

module.exports = function (router) {
  // GET: the 12 newest standup meeting notes
  router.get('/standup', (req, res) => {

  });

  // POST: the new meeting note document..

  router.post('/standup', (req, res) => {
    console.log(req.body);
    const standup = new Standup(req.body);
    standup.save((err, standup) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(standup);
    });
  });
};

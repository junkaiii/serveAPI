module.exports = function(app) {
  var membersController = require('../controllers/members.server.controller');

  app.get('/members', membersController.index);
};

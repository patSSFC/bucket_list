var user = require('../controllers/userController.js');
var event = require('../controllers/eventController.js');

module.exports = function(app) {
    app.post('/user', function(req, res) {
        console.log('Inside POST /user route');
        user.login(req, res);
    });
    app.get('/user', function(req, res) {
        console.log('Inside GET /user route');
        user.getAllUsers(req, res);
    });
    app.post('/event', function(req, res) {
        console.log('Inside POST /event route');
        event.postEvent(req, res);
    })
    app.get('/event/:user_id', function(req, res) {
        console.log('Inside GET /event/u_id route');
        event.getAllEvents(req, res);
    })
    app.get('/profile/:user_id', function(req, res) {
        console.log('Inside GET /profile/u_id route');
        event.getAllEvents(req, res);
    })
    app.post('/event/update', function(req, res) {
        console.log('Inside POST /event/update route');
        event.updateComplete(req, res);
    })
}

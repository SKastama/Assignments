const JokeController = require('../controllers/jokes.controller');

// Routing here, with modeule exports, example below
// module.exports = app => {
//     app.get('/api/users', UserController.findAllUsers);
//     app.get('/api/users/:id', UserController.findOneSingleUser);
//     app.put('/api/users/:id', UserController.updateExistingUser);
//     app.post('/api/users', UserController.createNewUser);
//     app.delete('/api/users/:id', UserController.deleteAnExistingUser);
// }

module.exports = app => {
    app.get('/api/jokes', JokeController.getAll);
    app.get('/api/jokes/:id', JokeController.getOne);
    app.post('/api/jokes', JokeController.createJoke);
    app.put('/api/jokes/:id', JokeController.updateJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
}

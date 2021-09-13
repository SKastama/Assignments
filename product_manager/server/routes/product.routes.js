const ProductController = require('../controllers/product.controller');

// Routing here, with modeule exports, example below
// module.exports = app => {
//     app.get('/api/users', UserController.findAllUsers);
//     app.get('/api/users/:id', UserController.findOneSingleUser);
//     app.put('/api/users/:id', UserController.updateExistingUser);
//     app.post('/api/users', UserController.createNewUser);
//     app.delete('/api/users/:id', UserController.deleteAnExistingUser);
// }

module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post("/api/product", ProductController.createProduct);
    app.get("/api/product", ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
}
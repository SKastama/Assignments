const ArticleController = require('../controllers/articles.controller');


module.exports = function(app){
    app.post("/api/article", ArticleController.createArticle);
    app.get("/api/article", ArticleController.getAllArticles);
    app.get("/api/article/:id", ArticleController.getArticle);
    app.put("/api/article/:id", ArticleController.updateArticle);
    app.delete('/api/article/:id', ArticleController.deleteArticle);
}
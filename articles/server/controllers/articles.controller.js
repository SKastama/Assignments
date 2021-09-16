const  Article  = require('../models/articles.model');

// Create
module.exports.createArticle = (req, res) => {
    const { name } = req.body;
    Article.create({name})
        .then(article => res.json(article))
        .catch(err => res.status(400).json(err))
}

// Get all
module.exports.getAllArticles = (req, res) => {
    Article.find({})
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json(err))
}

// Get one
module.exports.getArticle = (req, res) => {
    Article.findOne({_id:req.params.id})
        .then(article => res.json(article))
        .catch(err => res.status(400).json(err))
}

// Update one
module.exports.updateArticle = (req, res) => {
    Article.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedArticle => res.json(updatedArticle))
        .catch(err => res.status(400).json(err))
}

// Delete one
module.exports.deleteArticle = (req, res) => {
    Article.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json(err))
}
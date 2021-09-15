const  Author  = require('../models/author.model');

// Create
module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({name})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

// Get all
module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => res.status(400).json(err))
}

// Get one
module.exports.getAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

// Update one
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}

// Delete one
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json(err))
}
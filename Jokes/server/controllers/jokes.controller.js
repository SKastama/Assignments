const Joke = require('../models/jokes.model');

// Crud operations here, example below
// module.exports.findAllUsers = (req, res) => {
//     User.find()
//         .then(allDaUsers => res.json({ users: allDaUsers }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

module.exports.getAll = (req, res) => {
    Joke.find()
        .then(allJokes => {
            console.log(allJokes)
            res.json( allJokes )
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.getOne = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => res.json( oneJoke ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json( newJoke ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateJoke = (req, res) => {
    Joke.updateOne(
        {_id: req.params.id}, 
        req.body,
        { new: true, runValidators: true }
    )
        .then(updJoke => res.json( updJoke ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteJoke = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => res.json( result ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
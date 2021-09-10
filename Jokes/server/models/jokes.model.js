const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: { 
            type: String,
            required: [true, "Setup is required"],
            minlength: [6, "Setup must be at least 6 characters long"]
        },
        punchline: { 
            type: String,
            required: [true, "Punchline is required"],
            minlength: [6, "Punchline must be at least 6 characters long"]
        },
        createdAt: { 
            type: Date, 
            default: Date.now 
        },
        updatedAt: { 
            type: Date, 
            default: Date.now 
        }
    }
);

const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke;
const mongoose = require("mongoose");

// {PATH} will be replaced with the field name, such as "location".
const ArticleSchema = new mongoose.Schema({
    title: {
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
    },
    description: {
        type: String,
        default: "",
    },
    primaryCategory: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
    },
    secondaryCategory: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
    },
    imgUrl: {
        type: String,
        required: [true, "{PATH} is required."],
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    }, { timestamps: true } 
);
const Article = mongoose.model('article', ArticleSchema);

module.exports = Article;
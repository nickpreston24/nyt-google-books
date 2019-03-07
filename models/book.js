const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    link: {
        type: String,
        required: false,
        unique: true,
        dropDups: true
    },
    authors: {
        type: Array,
        required: true
    },
    description: String,
    image: String,
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
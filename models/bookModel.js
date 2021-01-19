const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

const bookModel = new Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  genre: {
    type: String
  },
  read: {
    type: String
  }

});

module.exports = mongoose.model('Book', bookModel);

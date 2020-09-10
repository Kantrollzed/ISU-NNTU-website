const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  title: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  news: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
})

const News =  mongoose.model('News', NewsSchema);

module.exports = { News }

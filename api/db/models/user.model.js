const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  userEmail: {
    type: String,
    required: true,
    minLength: 1,
    trim: true,
    unique: true
  },

  category: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  group_name: {
    type: String,
    trim: true
  },

  password: {
    type: String,
    required: true,
    minLength: 6,
    trim: true
  }
})

const User =  mongoose.model('User', UserSchema);

module.exports = { User }

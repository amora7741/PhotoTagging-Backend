const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nickname: String,
  duration: Number,
  date: String,
  localDate: String,
});

module.exports = mongoose.model('User', UserSchema);

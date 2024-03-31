const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nickname: String,
  duration: String,
});

module.exports = mongoose.model('User', UserSchema);

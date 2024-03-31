const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nickname: String,
});

module.exports = mongoose.model('User', UserSchema);

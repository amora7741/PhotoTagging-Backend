const User = require('../models/User');
const asyncHandler = require('express-async-handler');

const getAllUsers = asyncHandler(async (req, res, next) => {
  const allUsers = await User.find().sort({ nickname: 1 });
  res.json(allUsers);
});

const addUser = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const user = new User({
    nickname: req.body.nickname,
  });

  await user.save();
  res.status(201).json(user);
});

module.exports = { getAllUsers, addUser };

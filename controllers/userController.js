const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const { DateTime } = require('luxon');

const getAllUsers = asyncHandler(async (req, res, next) => {
  const allUsers = await User.find().sort({ duration: 1 });
  res.json(allUsers);
});

const addUser = asyncHandler(async (req, res, next) => {
  // Create a DateTime object in UTC
  const nowUTC = DateTime.utc();

  // Adjust to local time zone for display (if needed)
  const nowLocal = nowUTC.setZone('local');

  const user = new User({
    nickname: req.body.nickname,
    duration: req.body.duration,
    date: nowUTC.toJSDate(), // Save the UTC date in the database
    // Display the local time zone
    localDate: nowLocal.toLocaleString({
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    }),
  });

  await user.save();
  res.status(201).json(user);
});

module.exports = { getAllUsers, addUser };

const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const { DateTime } = require('luxon');
const { body, validationResult } = require('express-validator');

const getAllUsers = asyncHandler(async (req, res, next) => {
  const allUsers = await User.find().sort({ duration: 1 });
  res.json(allUsers);
});

const addUser = [
  body('nickname')
    .trim()
    .isLength({ min: 1, max: 10 })
    .escape()
    .withMessage('Nickname must be 1-10 characters.'),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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
  }),
];

module.exports = { getAllUsers, addUser };

const jwt = require('jsonwebtoken');
const { DateTime } = require('luxon');
require('dotenv').config();

const startTimer = (req, res, next) => {
  const token = jwt.sign(
    { start_time: DateTime.now() },
    process.env.TOKEN_SECRET
  );

  return res.json({ token });
};

const stopTimer = (req, res, next) => {
  const decoded = jwt.verify(req.body.token, process.env.TOKEN_SECRET);
  const start_time = DateTime.fromISO(decoded.start_time);
  const end_time = DateTime.now();
  const duration = end_time.diff(start_time, 'seconds');

  res.json(duration.toObject());
};

module.exports = { startTimer, stopTimer };

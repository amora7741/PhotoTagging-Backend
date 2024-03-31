const cron = require('node-cron');

let timerRunning = false;
let startTime;
let job;

const startTimer = (req, res, next) => {
  if (!timerRunning) {
    startTime = new Date(); // Record the start time
    // Start the cron job to run every second
    job = cron.schedule('* * * * * *', () => {
      console.log('Timer is running...');
    });
    timerRunning = true;
    console.log('Timer started');
    res.sendStatus(200); // Send success response
  } else {
    startTime = new Date();
  }
};

const stopTimer = (req, res, next) => {
  if (timerRunning) {
    const endTime = new Date(); // Record the end time
    const duration = ((endTime - startTime) / 1000).toFixed(2); // Calculate duration in seconds
    // Stop the cron job
    job.stop();
    timerRunning = false;
    console.log('Game over - Timer stopped');
    console.log('Duration:', duration, 'seconds');
    res.status(200).json({ duration }); // Send duration in the response
  } else {
    console.log('Timer is not running');
    res.status(400).send('Timer is not running');
  }
};

module.exports = { startTimer, stopTimer };

const sayHello = (req, res, next) => {
  const response = true;

  res.json(response);
};

module.exports = { sayHello };

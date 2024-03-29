const getCoordinates = (req, res, next) => {
  const character = req.params.character;
  const x = parseInt(req.params.x);
  const y = parseInt(req.params.y);

  const window = 5;

  const characters = {
    Wizard: { x: 27, y: 36 },
    Odlaw: { x: 11, y: 36 },
    Waldo: { x: 62, y: 38 },
  };

  const match = Object.keys(characters).some((char) => {
    const charX = characters[char].x;
    const charY = characters[char].y;
    return (
      x >= charX - window &&
      x <= charX + window &&
      y >= charY - window &&
      y <= charY + window &&
      character === char
    );
  });

  res.json(match);
};

module.exports = { getCoordinates };

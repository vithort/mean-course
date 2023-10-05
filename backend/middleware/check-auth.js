const jwt = require("jsonwebtoken");

const TOKEN = require("../../TOKEN");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, TOKEN.jwt);
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};

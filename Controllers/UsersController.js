const rescue = require('express-rescue');
const User = require('../service/UsersService');

const createUser = rescue(async (req, res) => {
  const token = await User.createUser(req.body);

  return res.status(201).json({ token });
});

const loginUser = rescue(async (req, res) => {
  const { authorization } = req.headers;
  const token = await User.loginUser(authorization);

  return res.status(200).json({ token });
})

module.exports = {
  createUser,
  loginUser,
}
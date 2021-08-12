const rescue = require('express-rescue');
const User = require('../service/UsersService');

const createUser = rescue(async (req, res) => {
  const user = await User.createUser(req.body);

  return res.status(201).json(user);
});

module.exports = {
  createUser,
}
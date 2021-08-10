const User = require('../service/UsersService');

const createUser = async (req, res) => {
  const user = await User.createUser(req.body);

  res.status(201).json(user);
}

module.exports = {
  createUser,
}
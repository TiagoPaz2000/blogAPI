const { User } = require('../models');
const crypto = require('crypto');

const createUser = async (userCredentials) => {
  console.log(userCredentials);
  const {
    firstName,
    lastName,
    email,
    password } = userCredentials;

  const encodedPassword = () => {
    return crypto
      .createHash('md5')
      .update(password)
      .digest('hex');
  };

  const newPassword = encodedPassword();

  const user = await User.create({ firstName, lastName, email, password: newPassword });
  return user;
}

module.exports = {
  createUser,
}
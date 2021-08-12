const { User } = require('../models');
const Joi = require('joi');
const validateJoi = require('../utils/validateJoi');
const crypto = require('crypto');
const { valid } = require('joi');

const createUser = async (userCredentials) => {
  const {
    firstName,
    lastName,
    email,
    password } = userCredentials;

  validateJoi(
    Joi.object({
      firstName: Joi.string().min(1).required(),
      lastName: Joi.string().min(1).required(),
      password: Joi.string().min(8).required(),
      email: Joi.string().email().required(),
    }),
    userCredentials,
    400,
  )

  const encodedPassword = () => {
    return crypto
      .createHash('md5')
      .update(password)
      .digest('hex');
  };

  const newPassword = encodedPassword();

  const user = await User.create({ firstName, lastName, email, password: newPassword });
  console.log(user);
  return user;
}

module.exports = {
  createUser,
}
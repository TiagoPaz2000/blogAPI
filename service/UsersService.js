const Joi = require('joi');
const crypto = require('crypto');
const { valid } = require('joi');
const { User } = require('../models');
const { sign } = require('../utils/jwt');
const validateJoi = require('../utils/validateJoi');
const errorHelper = require('../utils/errorHelper');

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
  );

  const userExisting = await User.findOne({ where: { email: userCredentials.email }});

  if (userExisting) errorHelper(401, '"Email" already used');

  const encodedPassword = () => {
    return crypto
      .createHash('md5')
      .update(password)
      .digest('hex');
  };

  const newPassword = encodedPassword();

  const { dataValues } = await User.create({ firstName, lastName, email, password: newPassword });
  const { password: userPassword, ...payload } = dataValues;

  const token = sign(payload);

  return token;
}

module.exports = {
  createUser,
}
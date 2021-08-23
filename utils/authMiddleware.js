const { verify } = require('./jwt');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  const [_bearer, token] = req.headers.authorization.split(' ');

  try {
    console.log('payload');
    const payload = await verify(token)
    await User.findOne({ where: { email: payload.email } });
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
}
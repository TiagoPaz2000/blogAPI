const { verify } = require('./jwt');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const [_bearer, token] = req.headers.authorization.split(' ');

    const payload = await verify(token);

    await User.findOne({ where: { email: payload.email } });

    req.user = payload;
    
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
}
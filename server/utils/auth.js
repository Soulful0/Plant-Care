const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'defaultsecret';
const expiration = '2h';

module.exports = {
  signToken: function({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  authMiddleware: function({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret);
      req.user = data;
      console.log('Token verified successfully:', req.user);
    } catch (error) {
      console.log('Invalid token:', error.message);
    }

    return req;
  },
};


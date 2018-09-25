const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const letsMakeAToken = user => {
    console.log('inside token',user)
    const timestamp = new Date().getTime();
    const payload = {
      sub: user.id,
      iat: timestamp,
      username: user.username,
      externalID: user.externalID
    };
    const options = {
      expiresIn: '5m'
    };
    return jwt.sign(payload, secret, options)
}

module.exports = {
    letsMakeAToken
}
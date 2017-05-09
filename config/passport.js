const JwtStratergy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt,
  User = require('../models/user'),
  config = require('../config/database');

module.exports = function(passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.secret;
  passport.use(new JwtStratergy(opts, (jwt_payload, done) => {
    // console.log(jwt_payload);
    User.getUserById(jwt_payload._doc._id, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        // no error, and user
        return done(null, user);
      } else {
        // no error, no user
        return done(null, false);
      }
    });
  }));
};
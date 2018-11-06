const passport = require('passport');

module.exports = function passportConfig(app) {
  app.user(passport.initialize());
  app.user(passport.session());

  // Stores user in session.
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // Retrieves user in session.
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  require('./strategies/locol.strategy');
};

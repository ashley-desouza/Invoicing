// Import the passport.js module
const passport = require('passport');

/*******************************************************************
  Export a function which contains the definitions of all the
  route handlers.

  This function assumes that the express 'app' will be provided as
  an input argument
********************************************************************/
module.exports = app => {
  // OAuth Authentication Route Handler
  app.get(
    '/auth/github',
    passport.authenticate('github', {
      scope: ['user', 'public_repo']
    })
  );

  // OAuth Authentication Callback Route Handler
  app.get(
    '/auth/github/callback',
    passport.authenticate('github'),
    (req, res) => {
      // Redirect the user to the 'Dashboard' page
      res.redirect('/invoices');
    }
  );

  // User Logout Route Handler
  app.get('/api/logout', (req, res) => {
    req.logout();

    // Redirect the user to the 'Landing' page
    res.redirect('/');
  });

  // Route Handler to get the current logged in User
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

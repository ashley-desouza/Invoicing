/*******************************************************************
  Import the passport.js module
********************************************************************/
const passport = require('passport');

/*******************************************************************
  Import the Github OAuth Strategy -
  https://github.com/cfsghost/passport-github
********************************************************************/
const GitHubStrategy = require('passport-github2').Strategy;

/*******************************************************************
  Import the config file
********************************************************************/
const keys = require('./../config/keys');

/*******************************************************************
 Import the mongoose module
********************************************************************/
const mongoose = require('mongoose');

/*******************************************************************
  Fetch the 'Users' collection
********************************************************************/
const User = mongoose.model('users');

/*******************************************************************
  Authentication -
  Use passport.js serializeUser() method to serialize the User into
  a session cookie

  Reference - http://passportjs.org/docs/configure
********************************************************************/
passport.serializeUser((user, done) => {
  // Serialize the id coming from MongoDB
  done(null, user.id);
});

/*******************************************************************
  Authentication -
  Use passport.js deserializeUser() method to deserialize the
  session cookie and retrieve the user from the fetched id

  Reference - http://passportjs.org/docs/configure
********************************************************************/
passport.deserializeUser(async (id, done) => {
  const newUser = await User.findById(id);
  done(null, newUser);
});

/*******************************************************************
  Tell the base passport module to use the Github Strategy 
  for User Authentication
********************************************************************/
passport.use(
  new GitHubStrategy(
    {
      clientID: keys.githubClientID,
      clientSecret: keys.githubClientSecret,
      callbackURL: '/auth/github/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // Search for an existing model instance having the provided profile.id
      const existingUser = await User.findOne({ githubId: profile.id });

      // Check if we were able to find a User in our database with the provided
      // profile.id
      if (!existingUser) {
        // If there isn't an existing User,
        // Create a new model instance -> MongoDB document
        // Persist the new User document to the mlab MongoDB database
        const newUser = await new User({ githubId: profile.id }).save();

        done(null, newUser);
      } else {
        // If the user already exists in our MongoDB, we just exit out
        // via done(err, res) method
        done(null, existingUser);
      }
    }
  )
);

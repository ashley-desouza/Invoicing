const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

/*******************************************************************
 Require in the 'User' and 'Invoice' collections
********************************************************************/
require('./models/User');
require('./models/Invoice');

/*******************************************************************
 Require the customized 'passport' Middleware
********************************************************************/
require('./services/passport');

/*******************************************************************
 Connect to the mlab MongoDB database
********************************************************************/
mongoose.connect(keys.mongoURI);

/*******************************************************************
 Create an Express App
********************************************************************/
const app = express();

/*******************************************************************
 Express App setup
********************************************************************/
app.use(morgan('combined'));

/*******************************************************************
 Middleware for the body-parser module
********************************************************************/
app.use(bodyParser.json({ type: '*/*' }));

/*******************************************************************
 Middleware for the cookie-session module
********************************************************************/
app.use(
  cookieSession({
    keys: [keys.cookieSession],
    maxAge: 24 * 60 * 60 * 1000 // 1 day in milliseconds
  })
);

/*******************************************************************
 Middleware for using the 'passport' module to use the
 'cookie-session' module.
********************************************************************/
app.use(passport.initialize());
app.use(passport.session());

/*******************************************************************
 Require the Route Handlers
********************************************************************/
require('./routes/authRoutes')(app);
require('./routes/invoiceRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  /*******************************************************************
    The order of the following statements is VERY IMPORTANT
    We perform these checks because we were unable to locate the
    resources in the route handlers defined just above

    1. Express will serve up production assets
       like main.js file or main.css file
  ********************************************************************/
  app.use(express.static('client/build'));

  /*******************************************************************
    2. Express will serve up the index.html file if it doesn't
       recognize the route
  ********************************************************************/
  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

/*******************************************************************
 Server Setup
********************************************************************/
const PORT = process.env.PORT || 5000;

app.listen(PORT, _ => console.log(`Server is listening on port: ${PORT}`));
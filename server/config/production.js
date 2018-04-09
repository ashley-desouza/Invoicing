// This is the Production environment config file
module.exports = {
  githubClientID: process.env.GITHUB_CLIENT_ID,
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieSession: process.env.COOKIE_SESSION,
  redirectDomain: process.env.REDIRECT_DOMAIN
};
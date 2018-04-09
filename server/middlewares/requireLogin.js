/*******************************************************************
  Middleware function which checks if there is a `user` property on
  the `req` Object.
********************************************************************/

module.exports = (req, res, next) => {
  if (!req.user) {
    return res
      .status(401)
      .send({ error: 'You must be authenticated to access this resource!!' });
  }

  next();
};
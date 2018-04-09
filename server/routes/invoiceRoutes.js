/*******************************************************************
 Import the mongoose module
********************************************************************/
const mongoose = require('mongoose');

/*******************************************************************
  Import the requireLogin middleware
********************************************************************/
const requireLogin = require('./../middlewares/requireLogin');

/*******************************************************************
  Fetch the 'invoices' collection
********************************************************************/
const Invoice = mongoose.model('invoices');

/*******************************************************************
  Export a function which contains the definitions of all the
  route handlers.

  This function assumes that the express 'app' will be provided as
  an input argument
********************************************************************/
module.exports = (app) => {
  // Route Handler to fetch list of Invoices
  app.get('/api/invoices', requireLogin, async (req, res) => {
    // Query the MongoDB for the list of Invoices for a particular User
    const invoices = await Invoice.find({ _user: req.user.id });

    // Send back the list of Invoices.
    res.send(invoices);
  });

  // Create Invoice Route Handler
  app.post('/api/invoice', requireLogin, async (req, res) => {
    const { name, email, lineItems, dueDate, totalAmount } = req.body;

    // Create a new model instance -> MongoDB document
    const invoice = new Invoice({
      name,
      email,
      lineItems,
      dueDate,
      totalAmount,
      createdAt: Date.now(),
      _user: req.user.id
    });

    try {
      // Persist the new Invoice document to the mlab MongoDB database
      await invoice.save();

      // Persist the updated User document to the mlab MongoDB database
      const user = await req.user.save();

      // Send back the updated User document
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};

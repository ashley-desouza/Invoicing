// Import the mongoose Middleware
const mongoose = require('mongoose');

// Extract the 'Schema' property from the mongoose Middleware
const { Schema } = mongoose;

// Create a Invoice Schema
const invoiceSchema = new Schema({
  name: String,
  email: String,
  lineItems: [{
    description: String,
    amount: Number
  }],
  dueDate: Date,
  totalAmount: Number,
  createdAt: Date,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

// Create a model class -> 'invoices' collection
mongoose.model('invoices', invoiceSchema);

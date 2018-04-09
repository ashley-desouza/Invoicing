// Import the mongoose Middleware
const mongoose = require('mongoose');

// Extract the 'Schema' property from the mongoose Middleware
const { Schema } = mongoose;

// Create a User Schema
const userSchema = new Schema({
  githubId: String
});

// Create a model class -> 'users' collection
mongoose.model('users', userSchema);

var mongoose = require('mongoose');
// Flesh out our Festival schema and register the model with Mongoose

var festivalSchema = new mongoose.Schema({
  name: String,
  city: String,
  state: String,
  month: String,
  website: String,
  genres: Array
})

var Festival = mongoose.model('Festival', festivalSchema);

module.exports = Festival;
'use strict';

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Display_name: { type: String, required: true },
  description: { type: String, required: true},
  category: { type: String, require: true}
});
module.exports = mongoose.model('User', productSchema);
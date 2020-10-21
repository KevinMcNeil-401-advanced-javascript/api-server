'use strict';

const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Display_name: { type: String, required: true },
  description: { type: String, required: true}
});

module.exports = mongoose.model('User', catSchema);
/*
  Store/Location Mongoose Model/Schema
*/

// Mongoose package & schema object
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StoreSchema = new Schema({
  number: String,
  name: String,
  district: String,
  timezone: String,
  address: {
    street1: String,
    street2: String,
    city: String,
    state: String,
    zip: String
  }
});

module.exports = mongoose.model('stores', StoreSchema);
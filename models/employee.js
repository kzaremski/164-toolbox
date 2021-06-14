/*
  Employee/User Mongoose Model/Schema
*/

// Mongoose package & schema object
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
  number: String,
  name: String,
  disabled: Boolean
});

module.exports = mongoose.model('employees', EmployeeSchema);
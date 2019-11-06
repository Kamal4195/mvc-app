/**
*  Instructor model
*  Describes the characteristics of each attribute in a instructor resource.
*
* @author Bhavya Deepthi <bhavyadeepthi545@gmail.com>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const InstructorSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  given: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Given name'
  },
  family: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Family name'
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true
  },
  city: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
    default: 'Maryville'
  },
  state: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    default: 'MO'
  },
  zip: {
    type: String,
    minlength: 5,
    maxlength: 12,
    required: true,
    default: '64468'
  },
  country: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    default: 'USA'
  },
  salary: {
    type: Number,
    minlength: 1,
    maxlength: 10,
    required: true,
    default: '10000'
  },
  github: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: true,
    default: 'https://github.com/Bhavya-123'
  }

})
module.exports = mongoose.model('Instructor', InstructorSchema)
// the model Instructor is for the instructors collection in the database.

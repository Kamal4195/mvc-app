/**
*  Section model
*  Describes the characteristics of each attribute in a Section resource.
*
* @author Raghunandan Kumar <naishdadamraghu@gmail.com@gmail.com>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const SectionSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
    ,
    unique: true
  },
  SectionNumber: {
    type: String,
    minlength: 02,
    maxlength: 02,
    required: true,
    unique: true
  },
  Days: {
    type: String,
    minlength: 1,
    maxlength: 5,
    required: true,
    default: 'MWF'
  },
  StartTime: {
    type: Number,
    minlength: 3,
    maxlength: 4,
    required: true,
    default: '0800'
  },
  RoomNumber: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
    default: 'CH 1200'
  },
  InstructorID: {
    type: Number,
    required: true
    // ,
    // default: '0000'
  },
  CourseID: {
    type: Number,
    required: true
    // ,
    // default: '64468'
  },
  country: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    default: 'USA'
  },
  url: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: true,
    default: 'http://yourwebsite.com'
  }

})
module.exports = mongoose.model('Developer', DeveloperSchema)
// the model Developer is for the developers collection in the database.

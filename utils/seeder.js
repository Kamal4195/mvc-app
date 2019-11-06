const Datastore = require('nedb') // set up a temporary (in memory) database
const instructorData = require('../data/instructors.json') // read in data file
const courseData = require('../data/courses.json')
const studentData = require('../data/students.json') // read in data file
const sectionData = require('../data/sections.json') // read in data file
// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections

  db.instructors = new Datastore() // new object property
  db.instructors.loadDatabase() // call the loadDatabase method


  // insert the sample data into our datastore
  db.instructors.insert(instructorData)

  db.courses = new Datastore() // new object property
  db.courses.loadDatabase() // call the loadDatabase method
  

  // insert the sample data into our datastore
  db.courses.insert(courseData)

  db.students = new Datastore() // new object property
  db.students.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  db.students.insert(studentData)

  db.sections = new Datastore() // new object property
  db.sections.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  db.sections.insert(sectionData)

  

  // initialize app.locals (these objects are available to the controllers)
  app.locals.instructors = db.instructors.find(instructorData)
  console.log(`${app.locals.instructors.query.length} instructors seeded`)

  app.locals.courses = db.courses.find(courseData)
  console.log(`${app.locals.courses.query.length} courses seeded`)
  
  app.locals.students = db.students.find(studentData)
  console.log(`${app.locals.students.query.length} students seeded`)

  app.locals.sections = db.sections.find(sectionData)
  console.log(`${app.locals.sections.query.length} sections seeded`)

  console.log('END Data Seeder. Sample data read and verified.')
}

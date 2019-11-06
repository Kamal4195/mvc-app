const Datastore = require('nedb') // set up a temporary (in memory) database
const instructorData = require('../data/instructors.json') // read in data file
const courseData = require('../data/courses.json')
const studentData = require('../data/student.json') // read in data file
const sectionData = require('../data/section.json') // read in data file
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

  db.student = new Datastore() // new object property
  db.student.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  db.student.insert(studentData)

  db.section = new Datastore() // new object property
  db.section.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  db.section.insert(sectionData)

  

  // initialize app.locals (these objects are available to the controllers)
  app.locals.instructors = db.instructors.find(instructorData)
  console.log(`${app.locals.instructors.query.length} instructors seeded`)

  app.locals.courses = db.courses.find(courseData)
  console.log(`${app.locals.courses.query.length} courses seeded`)
  
  app.locals.student = db.student.find(studentData)
  console.log(`${app.locals.student.query.length} student seeded`)

  app.locals.section = db.section.find(sectionData)
  console.log(`${app.locals.section.query.length} section seeded`)

  console.log('END Data Seeder. Sample data read and verified.')
}

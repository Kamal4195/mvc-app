const Datastore = require('nedb') // set up a temporary (in memory) database
const instructorData = require('../data/instructors.json') // read in data file

// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections

  db.instructors = new Datastore() // new object property
  db.instructors.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  db.instructors.insert(instructorData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.instructors = db.instructors.find(instructorData)
  console.log(`${app.locals.instructors.query.length} instructors seeded`)

  console.log('END Data Seeder. Sample data read and verified.')
}

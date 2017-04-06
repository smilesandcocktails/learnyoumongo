var mongo = require('mongodb').MongoClient
var argv = process.argv
var firstName = argv[2]
var lastName = argv[3]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
  if (err) return console.error(err)
  // db.createCollection('users')
  var collection = db.collection('users')

  collection.insert({
    firstName: firstName,
    lastName: lastName
  }), function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(doc))
    db.close()
  }
})

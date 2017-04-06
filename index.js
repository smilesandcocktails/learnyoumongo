var mongo = require('mongodb').MongoClient
var argv = process.argv
var targetedAge = argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
      // db gives access to the database
  // console.log('access the db success!')
  var parrots = db.collection('parrots')

  parrots.find({
    age: {
    $gt: +targetedAge
  }
  }).toArray(function (err, documents) {
    if (err) return console.error(err)
    console.log(documents)
  })
  db.close()
})

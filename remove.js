var mongo = require('mongodb').MongoClient
var argv = process.argv
var database = process.argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
  if (err) return console.error(err)
  var collection = db.collection(argv[3])

  collection.remove({
    _id: process.argv[4]
  }, function(err, data) {
    if (err) throw err
    db.close()
  })
})

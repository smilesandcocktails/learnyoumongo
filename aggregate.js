var mongo = require('mongodb').MongoClient
var argv = process.argv
var size = argv[2]

var mongo = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(mongo, function (err, db) {
  if (err) return console.error(err)
  var prices = db.collection('prices')

  parrots.aggregate([

  ]).toArray(function (err, data) {
    if (err) return console.error(err)
//
    db.close()
  })
})

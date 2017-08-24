const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/robotdb'
let robots = [];

function getAllDocs (err, db) {
  let collection = db.collection('robots')
  let documents = []
  collection.find({}).toArray(function (err, docs) {
    robots = docs
    // console.log(robots)
    db.close()
  })
}

function getAllRobots () {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, function (err, db) {
      const collection = db.collection('robots')
      collection.find({}).toArray(function (err, docs) {
        console.log(docs)
        resolve(docs)
        reject(err)
      })
    })
  })
}

// Use connect method to connect to the server

function connectMongodb (url, cb) {
  MongoClient.connect(url, cb)
}

function getRobots () {
  connectMongodb(url, getAllDocs)
  console.log(robots)  
  return robots;
}

module.exports = { getRobots, getAllRobots }


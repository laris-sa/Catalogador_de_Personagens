var express = require('express');
var router = express.Router();
var db = require('../src/models/dao/charactersDAO');
var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb+srv://larissa:mnbvcxz@cluster0.4n36ode.mongodb.net/?retryWrites=true&w=majority'

router.get('/', async function(req, res, next) {
  var client = new MongoClient(uri);
  await client.connect();
  var personagens = await db.getPersonagens(client)
  await client.close();
  //console.log(JSON.stringify(personagens, null, 2))
  res.render('index', {personagens: personagens});
});
module.exports = router;
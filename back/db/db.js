var config 		= require('../config.json');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://betonix:beto2525@cluster0-vvu2w.mongodb.net/test";
var db;

exports.DBConnect = function() {
    return new Promise(function(resolve, reject) {
   
        if (db) {
            return resolve(db);
        }
        // database connect
		MongoClient.connect(url, function(err, ddb) {
			  if (err){
				  reject(err);
			  }				 
			  var dbo = ddb.db("test");
			  console.log("Database created!");
			  db = dbo;
			  resolve(db)
		});
    });
};


var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Malmo@123"
  
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE if not exists world", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});


module.exports = connection;
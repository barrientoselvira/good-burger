//Set up MySQL connection.
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    //Your username
    user: 'root',
    //Your password 
    password: 'root',
    database: 'burgers_db',
    port: '3306'
});

// Make connection
connection.connect(function(err){
    if(err) { 
        console.error('error connecting:' + err.stack);
        return;
        }
        console.log('connected as id' + connection.threadId);

    });

    module.exports = connection;
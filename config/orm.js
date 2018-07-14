// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function for SQL syntax.
  function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob [key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === 'string' && value.indexOf('') >= 0) {
            value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
    }
}
    return arr.toString();
    }
  
  // Object for all our SQL statement functions.
  var orm = {
    selectAll: function(tableInput, cb) {
  
  // Construct the query string that returns all rows from the target table
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
  },
    insertOne: function(table, cols, tableInput, cb) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, [burgerInput], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }

        cb(result);
      });
    },
    delete: function(table, condition, cb){
        var queryString = "DELETE FROM " + table;
        queryString += "WHERE ";
        queryString += condition; 

        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    }
};


//Export the orm object for the model (burger.js)
module.exports = orm;
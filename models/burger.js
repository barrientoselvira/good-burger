//Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

var burger  = {
    selectAll: function(cb){
        orm.selectAll('burgers', function(result){
            cb(result);
        });
    },
    insertOne: function(cols, vals, cb){
        orm.insertOne('burgers', cols, vals, function(result){
            cb(result);
        });
    }, 
    updateOne: function(objColVals, condition, cb){
        orm.updateOne('burgers', ObjColVals, condition, function(result){
            cb(result);
        });
    }
};
//Export
    module.exports = burger;
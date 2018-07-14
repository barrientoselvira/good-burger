// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
var express = require('express');
var bodyParser = require('body-parser');
// var exphbs = require('express-handlebars');

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================
// Tells node that we are creating an "express" server
var app = express();

//Serve static content for the app
app.use(express.static('public'));


//Set the port of our application
var PORT = 3000;

//Sets up the Express app to handle data parsing 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Import routes and give the server access to them. 
var router = require('./controllers/burgers_controllers.js')
app.use('/', router);


app.listen(PORT, function(){
    console.log('App listening on PORT' + PORT);
});
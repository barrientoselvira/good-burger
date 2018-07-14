//Node Dependencies
var express = require("express");
var router = express.Router();
//Import the model 
var burger = require("../models/burger.js");

// Create routes
// ----------------------------------------------------

// our landing page
router.get("/", function (req, res) {
  res.redirect("/burgers");
});

// to view all
router.get("/burgers", function (req, res) {
  burger.selectAll(function (data) {
      var hbsObject = {
          burgers: data
      };
      res.render("index", hbsObject);
  });
});

// to add a burger
router.post("/burgers/insertOne", function (req, res) {
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function () {
      res.redirect("/burgers");

  });
});

// to change from 'ready to eat' to devoured
router.put("/burgers/updateOne/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  
  burger.updateOne({
    devoured: true
  }, condition, function () {
      res.redirect("/burgers");
      if (res.changedRows === 0) {
          return res.status(404).end();
      } else {
          res.status(200).end();
      }
  });
});


//Export routes
module.exports = router; 











// // Index Redirect
// router.get('/', function (req, res) {
//     res.redirect('/index');
//   });
  
  
// // Index Page (render all burgers to DOM)
//   router.get('/index', function (req, res) {
//     burger.selectAll(function(data) {
//       var hbsObject = { burgers: data };
//       //console.log(hbsObject);
//       res.render('index', hbsObject);
//     });
//   });
  
  
//   router.post('/api/burgers', function(req, res) {
//      burger.insertOne(['burger_name', 'devoured'], [
//       "'" + req.body.burger_name + "'", false
//   ], function(result) {
//       //send back the ID of the new quote
//       res.json({ id: result.insertOne });
//   });
// });
  
//   router.put('/api/burgers/:id', function(req, res) {
//       var condition = 'id =' + req.params.id;

//       console.log('condition', condition);

//       burger.updateOne({
//         devoured: true //req.body.burgers
//       }, condition, function(result){
//           if(result.changeRows == 0) {
//               return res.status(404).end();
//           } else {
//               res.status(200).end();
//           }
//       });
//   });


// Import the modules we need
const express = require('express');
const mongoose = require('mongoose');

// Activate Express
const app = express();

// Import controller file
const controller = require('./controllers/controller');

// Connect to the database
// var mongoUrl = process.env.MONGODB_URI;
// mongoose.connect(mongoUrl, { useMongoClient: true }, function(err){
//   if(err) return console.log(err);
//   console.log("Database connection is working");
// })

// ROUTES
// Each line describes a particular kind of HTTP request, and the function that should run in response to it
app.get('/', controller.getList);
app.get('/form', controller.getForm);

// Serve all files in the 'public' folder
app.use(express.static('./public'));

// Make the app listen for HTTP requests on a particular port
let port = process.env.PORT || 4000;
app.listen(port, function(){
  console.log("The app is running on port " + port + ". Type Ctrl+C to quit it.");
});

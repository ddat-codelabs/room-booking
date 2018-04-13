// Import the modules we need
const express = require('express');
const mongoose = require('mongoose');

// Activate Express
const app = express();

// A route
app.get('/', function(req, res){
  res.send('working');
});

// Make the app listen for HTTP requests on a particular port
let port = process.env.PORT || 4000;
app.listen(port, function(){
  console.log("The app is running on port " + port + ". Type Ctrl+C to quit it.");
});

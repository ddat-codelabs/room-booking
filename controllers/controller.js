// An object containing several functions that run in response to particular HTTP requests
const controller = {
  getList: function(req, res, next){
    res.send('Hello world')
  },

  getForm: function(req, res, next){
    res.send('This is the form')
  }

}

// Make the controller object available when this file is required in another file
module.exports = controller;

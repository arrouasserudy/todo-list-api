var express = require('express'),
app = express(),
port = 5000,
mongoose = require('mongoose'),
Task = require('./api/models/todoListModel'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
// mongodbPassword = rudy1903!
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://rudy-test0:rudy1903!@cluster0-qcww3.mongodb.net/test?retryWrites=true'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  console.log(req)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
 
  next();
});

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);


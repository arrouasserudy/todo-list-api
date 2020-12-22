const express = require('express'),
	app = express(),
	port = 5000,
	mongoose = require('mongoose'),
	Task = require('./api/models/todoListModel'), //created model loading here
	Product = require('./api/models/product'), //created model loading here
	// User = require('./api/models/user'),
	bodyParser = require('body-parser'),
	config = require('./config')

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
const connectionString = 'mongodb+srv://rudy:rudy0000@cluster0.wlayy.mongodb.net/jordan?retryWrites=true&w=majority\n'
// const connectionString = `mongodb+srv://${username}:${password}@cluster0.wlayy.mongodb.net/${databaseName}?retryWrites=true&w=majority\n`
mongoose.connect(connectionString);
// mongoose.connect(`mongodb+srv://rudy:rudy0000@cluster0-qcww3.mongodb.net/test?retryWrites=true`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  console.log(req)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});



var todoRoutes = require('./api/routes/todoListRoutes'); //importing route
var productRoutes = require('./api/routes/product'); //importing route
todoRoutes(app); //register the route
productRoutes(app); //register the route


app.listen(port);

console.log('todo list RESTful API server started on: ' + port);


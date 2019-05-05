var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Bookmark = require('./api/models/bookmarkModel'), // * created model loading here
bodyParser = require('body-parser');

// * mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Bookmarksdb', {useNewUrlParser: true}); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/bookmarkRoutes'); // * importing route
routes(app); // * register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Bookmark RESTful API server started on: ' + port);

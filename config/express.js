var config = require('./config');
var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var multer = require('multer');
var cors = require('cors');
module.exports = function(){

	var app = express();

	// setting environment ---------------------------------------

	if(process.env.NODE_ENV === 'development') app.use(morgan('dev'));
	else if(process.env.NODE_ENV ==='common') app.use(morgan('common'));
	else app.use(compression);

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(cors());
	// setting environment ---------------------------------------

  //setting up routing -------------------------------------

  //setting up routing -------------------------------------

  app.use(express.static('./public'));

	return app;
}

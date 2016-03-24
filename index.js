/** this is mock server. No performance, no best practices purposes 
* is present.
*
*/

// var db = require('orchestrate')(process.env.ORCHESTRATE_API_KEY);
// var models = require('./models');
// var ObjectId = require('mongodb').ObjectID
// var encrypt = require('crypto');
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
// var cors = require('cors');
var url = require('url');
var upload = multer(); // for parsing multipart/form-data
// sign with default (HMAC SHA256)
// var jwt = require('jsonwebtoken');
// var requests = require('request-json');
var app = express();


// Body parser...
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// CORS
// app.use(cors());
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

// INIT SERVER
var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

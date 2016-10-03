                               
var express = require('express');
var app = express();

var routes = require('./routes/index');

// set the port of our application                                              
// process.env.PORT lets the port be set by Heroku                              
var port = process.env.PORT || 8080;

// set the view engine to ejs                                                   
app.set('view engine', 'ejs');

//use routes 
app.use('/', routes);

// make express look in the public directory for assets (css/js/img)            
app.use(express.static(__dirname + '/public'));


// set the home page route                                                      
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder                       
    res.render('index');
   
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});


var express = require('express');
var app = express();
var router = express.Router();
var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
var bodyParser = require('body-parser');

console.log('page load');

app.get('/', function(req, res) {	
	sendgrid.send({
      to:       'niamhmulholland@college.harvard.edu',
      from:     'noreply@test.com', 
      subject:  'Test',
      text:     'Welcome'
    }, function(err, json) {
      if (err) { return res.send('error in form submit');}    
      res.send('fyay');
    }); 
}); 

module.exports = router;



















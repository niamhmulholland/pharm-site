                               
var express = require('express');
var app = express();
var sendgrid = require('sendgrid')(SENDGRID_USERNAME, SENDGRID_PASSWORD);

// set the port of our application                                              
// process.env.PORT lets the port be set by Heroku                              
var port = process.env.PORT || 8080;

// set the view engine to ejs                                                   
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)            
app.use(express.static(__dirname + '/public'));

// set the home page route                                                      
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder                       
    res.render('index');

    //email on page load

    sendgrid.send({
    	to: 'niamhclairemulholland@gmail.com',
    	from: 'duffyspharmacypage',
    	subject: 'test',
    	text: 'hey i think it works'
    }, function(errk, json) {
    	if (err) {return console.error(err); }
    	console.log(json);
    });
   
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});




















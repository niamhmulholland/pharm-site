var express = require('express');
var router = express.Router();
var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

router.get('form-horizontal', function(req, res) {
	
	sendgrid.send({
      to:       'niamhmulholland@college.harvard.edu',
      from:     'noreply@test.com',
      subject:  'Test',
      text:     'Welcome'
    }, function(err, json) {
      if (err) { return console.log('error in form submit');}    
      console.log('form sent');
    });
});

module.exports = router;


/*var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('views'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});

app.post('/signup', function (req, res) {
  // save user details to your database.
  res.send('Signed Up!');
});
 */
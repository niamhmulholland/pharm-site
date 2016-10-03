var express = require('express');
var app = express();
var router = express.Router();
var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
var bodyParser = require('body-parser');

console.log('page load');

router.get('/', function(req, res) {	
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
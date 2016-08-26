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
var express = require('express');
var router = express.Router();
var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

router.get('/', function(req, res) {
	
	sendgrid.send({
      to:       process.env.EMAIL,
      from:     'noreply@test.com',
      subject:  'Test',
      text:     'Welcome'
    }, function(err, json) {
      if (err) { return res.send('ahhhh');}    
      res.send('yayyy');
    });
});

module.exports = router;
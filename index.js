var express = require('express');
var app = express();
var router = express.Router();
var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
var bodyParser = require('body-parser');

console.log('page load');

/*

app.post('photolab-form', function(request, response){  

  console.log('button request');

    //var email = request.query.email;
    //var message = request.query.message;

    sendgrid.send({
      to:       'niamhmulholland@college.harvard.edu',
      from:     'email',
      subject:  'Test',
      text:     'message'
    }, function(err, json) {
      if (err) { return console.log('error in form submit');}    
      console.log('form sent');
      //response.statusCode = 302; 
      //response.setHeader("Location", "/login");
      //response.end();
    }); 
}); */

/*router.post('photolab-form', function(req, res) {

// http://stackoverflow.com/questions/37200003/how-do-i-handle-a-form-buttons-post-request-in-node-js-and-express
// stackoverflow example might work? 
		
		console.log(request.query.message);



//alternative 2: make var data and use sendgrid? 

	//var email = request.query.email;
	//var message = request.query.message;*/

	
	sendgrid.send({
      to:       'niamhmulholland@college.harvard.edu',
      from:     'noreply@test.com', // email ^^^
      subject:  'Test',
      text:     'Welcome'
    }, function(err, json) {
      if (err) { return console.log('error in form submit');}    
      console.log('form sent');
    }); 
}); 

module.exports = router;
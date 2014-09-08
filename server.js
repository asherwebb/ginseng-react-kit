var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/', express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/user', function(req, res) {
  console.log(req.body);
  echo = req.body;
  
	res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({test:"test"}));
	});


app.listen(3456);

console.log('Server started: http://localhost:3456/');

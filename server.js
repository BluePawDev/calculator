// Globals
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// Users
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// Listen
app.listen(7500, function(){
  // console.log('server listening on port: 7500');
});

app.get('/', function(req, res){
  res.sendFile(path.resolve('views/index.html'));
});

app.post('/toDivide', function(req, res){
  numOne = Number(req.body.numOne);
  numTwo = Number(req.body.numTwo);
  var responseDivide = {
    resultDiv: numOne / numTwo
  };
  res.send(responseDivide);
});

app.post('/toMultiply', function(req, res){
  numOne = Number(req.body.numOne);
  numTwo = Number(req.body.numTwo);
  var responseMultiply = {
    resultMultiply: numOne * numTwo
  };
  res.send(responseMultiply);
});

app.post('/toSubtract', function(req, res){
  numOne = Number(req.body.numOne);
  numTwo = Number(req.body.numTwo);
  var responseSubtract = {
    resultSubtract: numOne - numTwo
  };
  res.send(responseSubtract);
});

app.post('/toAdd', function(req, res){
  numOne = Number(req.body.numOne);
  numTwo = Number(req.body.numTwo);
  var responseAdd = {
    resultAdd: numOne + numTwo
  };
  res.send(responseAdd);
});

app.post('/fullCalculator', function(req, res){
  numOne = Number(req.body.numOne);
  numTwo = Number(req.body.numTwo);
  actType = req.body.actType;
  var responseFull;
  if (actType === 'divide') {
    responseFull = numOne / numTwo;
    responseFull = String(responseFull);
  }
  else if (req.body.actType === 'multiply') {
    responseFull = numOne * numTwo;
    responseFull = String(responseFull);
  }
  else if (req.body.actType === 'subtract') {
    responseFull = numOne - numTwo;
    responseFull = String(responseFull);
  }
  else {
    responseFull = numOne + numTwo;
    responseFull = String(responseFull);
  }
  res.send(responseFull);
});

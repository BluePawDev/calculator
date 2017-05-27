// Globals
var express = require('express');
var app = express();
var path = require('path');


// Listen
app.listen(7500, function(){
  console.log('server listening on port: 7500');
});

app.get('/', function(req, res){
  console.log('base URL was hit');
  res.sendFile(path.resolve('views/index.html'));
});

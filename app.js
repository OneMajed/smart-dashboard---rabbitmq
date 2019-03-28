var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello Abdo!!");
   // render_template('index.html')
   // how can we do this in express??
});

app.listen(3000);
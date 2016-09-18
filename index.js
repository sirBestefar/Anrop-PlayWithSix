var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world!');
});

app.use('/search', require('./search'));
app.use('/templates', require('./templates'));

app.listen(process.env.PORT || 3000);

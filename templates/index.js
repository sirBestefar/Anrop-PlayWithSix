const express = require('express');

const templates = require('./templates.json');

const app = express();

app.get('/', function(req, res){
  res.send(templates);
});

module.exports = app;

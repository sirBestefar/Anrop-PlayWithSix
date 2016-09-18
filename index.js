const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', function(req, res){
  res.send('hello world!');
});

app.use('/operations', require('./operations'));
app.use('/search', require('./search'));
app.use('/templates', require('./templates'));

app.listen(process.env.PORT || 3000);

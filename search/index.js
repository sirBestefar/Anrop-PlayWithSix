const express = require('express');
const playwithsix = require('playwithsix');

const cache = require('../cache');

const CACHE_SEARCH_RESPONSE_DURATION = 10 * 60

const app = express();

app.get('/', cache(CACHE_SEARCH_RESPONSE_DURATION), function(req, res){
  const query = req.query.q;

  if (!query) {
    res.status(400).send('Missing query');
    return;
  }

  playwithsix.search(query, function (err, mods) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(mods);
  });
});

module.exports = app;

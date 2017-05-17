const express = require('express')
const playwithsix = require('playwithsix')

const modUrl = require('./mod_url')

const app = express()

app.get('/', function (req, res) {
  var name = req.query.name

  if (!name) {
    return res.status(400).send('Missing name query')
  }

  playwithsix.search('', function (err, mods) {
    if (err) {
      return res.status(500).send(err)
    }

    var mod = mods.find(function (mod) {
      return mod.name === name
    })

    if (!mod) {
      return res.status(404).send('Mod ' + name + ' was not found')
    }

    var url = modUrl(mod)

    if (!url) {
      return res.status(500).send('Failed to create URL')
    }

    return res.redirect(url)
  })
})

module.exports = app

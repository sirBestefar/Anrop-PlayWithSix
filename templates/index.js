const express = require('express')

const afisync = require('./afisync')
const templates = require('./templates.json')

const app = express()

app.get('/', (req, res) => {
  afisync()
    .then((afisync) => {
      const sortedTemplates = afisync.concat(templates).sort((a, b) => a.title.localeCompare(b.title))
      res.send(sortedTemplates)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send(err)
    })
})

module.exports = app

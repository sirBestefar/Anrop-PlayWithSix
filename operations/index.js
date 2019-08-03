const express = require('express')
const request = require('request')

const createMasterConfig = require('./master')
const createOperationConfig = require('./operation')

const API_BASE_URL = 'https://api.anrop.se/'
const OPERATIONS_URL = API_BASE_URL + 'operations/'
const UPCOMING_OPERATIONS_URL = OPERATIONS_URL + 'upcoming'

const app = express()

app.get('/config.yml', function (req, res) {
  request.get({ url: UPCOMING_OPERATIONS_URL, json: true }, function (err, response, operations) {
    if (err) {
      res.status(500).send(err)
      return
    }

    res.send(createMasterConfig(operations))
  })
})

app.get('/:id.yml', function (req, res) {
  const operationUrl = OPERATIONS_URL + req.params.id
  request.get({ url: operationUrl, json: true }, function (err, response, operation) {
    if (err) {
      res.status(500).send(err)
      return
    }

    request.get({ url: operationUrl + '/play_with_six', json: true }, function (err, response, mods) {
      if (err) {
        res.status(500).send(err)
        return
      }

      res.send(createOperationConfig(operation, mods))
    })
  })
})

module.exports = app

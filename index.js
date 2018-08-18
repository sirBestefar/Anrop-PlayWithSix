if (process.env.NEW_RELIC_LICENSE_KEY && process.env.NEW_RELIC_APP_NAME) {
  require('newrelic')
}

const express = require('express')
const cors = require('cors')
const robots = require('express-robots')

const app = express()
app.use(cors())
app.use(robots({
  UserAgent: '*',
  Disallow: '/'
}))

app.get('/', function (req, res) {
  res.send('hello world!')
})

app.use('/operations', require('./operations'))
app.use('/templates', require('./templates'))

app.listen(process.env.PORT || 3000)

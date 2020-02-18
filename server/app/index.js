const express = require('express')

const app = express()

app.get('/ping', (req, res) => res.send('ok'))

app.get('*', (req, res) => res.send({ ping: 'ok', route: req.url }))

module.exports = app

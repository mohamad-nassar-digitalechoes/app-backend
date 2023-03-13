const express = require('express')
const Route = require('./route')
const app = express()
require('dotenv').config()
const port = 3000
app.use(express.json());
app.use(Route)
app.listen(port)

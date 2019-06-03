import express from 'express'
var bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

var eventsRoute = require('./routes/events')
var photosRoute = require('./routes/photos')
var contactsRoute = require('./routes/contacts')
var newslettersRoute = require('./routes/newsletters')
var configsRoute = require('./routes/configs')
var usersRoute = require('./routes/users')

app.use('/events', eventsRoute)
app.use('/photos', photosRoute)
app.use('/contacts', contactsRoute)
app.use('/newsletters', newslettersRoute)
app.use('/configs', configsRoute)
app.use('/users', usersRoute)

// Export the server middleware
export default {
  path: '/api',
  handler: app
}

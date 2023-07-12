const express = require('express')
require('dotenv').config()
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.get()

app.listen(process.env.PORT, console.log('Listening on port 3000'))



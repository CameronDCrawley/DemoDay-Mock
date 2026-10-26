require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())                    // was app.use(cors), which hung every request

// Render EJS files from this same folder
app.set('view engine', 'ejs')
app.set('index.ejs', __dirname)

app.get('/', (request, response) => {
  response.render('index')         // renders index.ejs into a real page
})

// Your static files, kept as explicit routes so nothing else in the folder (like .env) is exposed
app.get('/main.js', (request, response) => {
  response.sendFile(__dirname + '/main.js')
})
app.get('/style.css', (request, response) => {
  response.sendFile(__dirname + '/style.css')
})
app.get('/cloud.jpg', (request, response) => {
  response.sendFile(__dirname + '/cloud.jpg')
})

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})
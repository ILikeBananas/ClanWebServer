const express = require('express')
const app = express()
const path  = require('path')
const config = require('config/config.json')

// setup pug engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// Static routes
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/css', express.static(path.join(__dirname, 'css')))

// basic routes
app.get('/', (req, res) => {
  res.render("index")
})

app.listen(config.port)

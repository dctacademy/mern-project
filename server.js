const express = require('express') 
const configDB = require('./config/databse')
const app = express() 

configDB()

app.get('/', (req, res) => {
    res.send('home page')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.get('/contact', (req, res) => {
    res.send('contact page')
})

app.listen(3050)

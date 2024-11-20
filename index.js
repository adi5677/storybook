const express = require('express')
require('dotenv').config()

// template engine
const path = require('path')
const ejs = require('ejs')

const connectDB = require('./db')

connectDB()

const app = express()


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public/')))

app.use(express.urlencoded({extended: true}))
app.use(express.json())


const storiesRouter = require('./routes/stories')

app.use('/api/stories', storiesRouter)

app.all("*", (req, res) => {
    res.render('error/404')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Listening to server on port: ${PORT}`)
})
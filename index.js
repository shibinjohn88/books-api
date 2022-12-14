const express = require('express')
const mongoose = require ('mongoose')

//configuration
const app = express ()
require ('dotenv').config()
app.use (express.json())


//Index
app.get ('/', (req, res) => {
    res.send('Welcome to Books Api!')
})

//Books
const booksController = require ('./controllers/books.js')
app.use ('/books', booksController)


app.listen(3000, () => {
    console.log('listening on port')
})


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

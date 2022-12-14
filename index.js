const express = require('express')
const mongoose = require ('mongoose')
const cors = require ('cors')

//configuration
const app = express ()
require ('dotenv').config()
app.use (express.json())


//Enable all CORS requests
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})


//Index
app.get ('/', (req, res) => {
    res.send('Hello world')
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

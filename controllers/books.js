const express = require ('express')
const books = express.Router ()
const Book = require ('../models/books.js')

//INDEX
books.get ('/', async (req, res) => {
    res.send('get list of books')
})

//Book Details
books.get ('/:id', async (req, res) => {
    res.send ('Show book details')
})

//Create
books.post ('/', async (req, res) => { 
    res.send ('Create new book')
})

//Delete
books.delete ('/:id', async (req, res) => {
    res.send ('book deleted')
})

//Update book details
books.put ('/:id', async (req, res) => {
    res.send ('book details upated')
})







module.exports = books



const express = require ('express')
const books = express.Router ()
const Book = require ('../models/books.js')


//INDEX
books.get ('/', (req, res) => {
    Book.find ()
    .then (books => {
        res.status(200).json(books)
    })
    .catch (err => {
        res.json(err)
    })
    
})

//Book Details
books.get ('/:id', async (req, res) => {
    Book.findById (req.params.id)
        .then (book => {
            res.status(200).json(book)
        })
        .catch (err => {
            res.json (err)
        })
})

//Create
books.post ('/', (req, res) => { 
    Book.create(req.body)
        .then ( bookCreated => {
            res.status (200).json (bookCreated)

        })
        .catch (err => {
            res.send ('error is 404')
        })
})

//Delete
books.delete ('/:id', async (req, res) => {
    Book.findByIdAndDelete (req.params.id)
        .then (book => {
            res.status (200).json ('Delete Successful')
        })
        .catch (err => {
            res.json (err)
        })
})

//Update book details
books.put ('/:id', async (req, res) => {
    Book.findByIdAndUpdate (req.params.id, req.body, {new: true})
        .then (book => {
            res.status (200).json (book)
        })
        .catch (err => {
            res.json (err)
        })
})

module.exports = books



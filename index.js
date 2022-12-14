const express = require('express')
const app = express ()

app.get ('/', (req, res) => {
    res.send('Welcome to Books Api!')
})

app.use (express.json())

app.listen(3000, () => {
    console.log('listening on port')
})




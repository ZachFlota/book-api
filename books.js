const router = require('express').Router()
const res = require("express/lib/response")
const db = require('../models/books')



//Routes
router.get('/', (req, res) => {
    res.render('/books')
})

module.exports = router
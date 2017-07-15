const router = require('express').Router()
const Page = require('../models/page')
const User = require('../models/user') 

module.exports = router



router.get('/', (req, res, next) => {
    Page.findAll()
    .then(pages => {
        res.json(pages)
    })
    .catch(next);
})

router.get('/:id', (req,res,next) => {
    Page.findById()
})
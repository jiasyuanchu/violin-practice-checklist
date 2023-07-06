const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const items = require('./modules/items')
const users = require('./modules/users') 

router.use('/users', users)
router.use('/items', items)
router.use('/', home)

module.exports = router
const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const items = require('./modules/items')
const users = require('./modules/users')

const { authenticator } = require('../middleware/auth')

router.use('/users', users)
router.use('/items', authenticator, items)
router.use('/', authenticator, home)

module.exports = router
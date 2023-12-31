const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const items = require('./modules/items')
const users = require('./modules/users')
const auth = require('./modules/auth')

const { authenticator } = require('../middleware/auth')

router.use('/users', users)
router.use('/items', authenticator, items)
router.use('/auth', auth)
router.use('/', authenticator, home)

module.exports = router
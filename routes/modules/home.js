const express = require('express')
const router = express.Router()
const Item = require('../../models/items')
const items = require('../../models/items')

router.get('/', (req, res) => {
  Item.find()
    .lean()
    .sort({ name: 'asc' })
    .then(items => res.render('index', { items }))
    .catch(error => console.log(error))
})

module.exports = router
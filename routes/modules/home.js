const express = require('express')
const router = express.Router()
const Item = require('../../models/item')

router.get('/', (req, res) => {
  Item.find()
    .lean()
    .sort({ name: 'asc' })
    .then(items => res.render('index', { items }))
    .catch(error => console.log(error))
})

module.exports = router
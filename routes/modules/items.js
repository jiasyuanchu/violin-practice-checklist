const express = require('express')
const items = require('../../models/items')
const router = express.Router()

router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  const name = req.body.name
  return items.create({ name })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
const express = require('express')
const Items = require('../../models/items')
const router = express.Router()

router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  const name = req.body.name
  return Items.create({ name })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return Items.findById(id)
    .lean()
    .then((item) => res.render('detail', { item }))
    .catch(error => console.log(error))
})

module.exports = router
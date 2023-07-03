const express = require('express')
const Items = require('../../models/items')
const router = express.Router()
const mongoose = require('mongoose')

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

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Items.findById(id)
    .lean()
    .then((item) => res.render('edit', { item }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const name = req.body.name
  return Items.findById(id)
    .then(item => {
      item.name = name
      return item.save()
    })
    .then(() => res.redirect(`/items/${id}`))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Items.findById(id)
    .then(
      item => item.deleteOne()
      )
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
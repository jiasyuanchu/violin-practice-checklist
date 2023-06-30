const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('some dummy data here!')
})

module.exports = router
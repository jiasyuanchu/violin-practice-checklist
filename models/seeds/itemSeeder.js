if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const Item = require('../item')
const db = require('../../config/mongoose')

db.once('open', () => {
  for (let i = 0; i < 10; i++) {
    Item.create({ name: `item-${i}` })
  }
  console.log('seeders done')
})
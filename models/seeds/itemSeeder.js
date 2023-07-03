const Item = require('../items')
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < 10; i++) {
    Item.create({ name: `item-${i}` })
  }
  console.log('done')
})
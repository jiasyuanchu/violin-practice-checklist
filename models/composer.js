const mongoose = require('mongoose')
const Schema = mongoose.Schema

const composerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  originalId: {
    type: String,
    required: false
  },
  completeName: {
    type: String,
    required: false
  },
  birth: {
    type: String,
    required: false
  },
  death: {
    type: String,
    required: false
  },
  epoch: {
    type: String,
    required: false
  },
  portrait: {
    type: String,
    required: false
  }
})
module.exports = mongoose.model('Composer', composerSchema)
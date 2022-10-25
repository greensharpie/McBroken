const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Restaurant = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    url: { type: String, required: false },
    broken: { type: String, required: true },
    working: { type: String, required: true },
    update: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Restaurant', Restaurant)

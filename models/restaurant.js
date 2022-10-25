const { Schema } = require('mongoose')

const restaurantSchema = new Schema(
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

module.exports = restaurantSchema

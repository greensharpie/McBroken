const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Neighborhood = new Schema(
  {
    name: { type: String, required: true },
    restaurants: { type: Schema.Types.ObjectId, ref: 'restaurants' }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Neighborhood', Neighborhood)

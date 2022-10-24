const { Schema } = require('mongoose')

const neighborhoodSchema = new Schema(
  {
    name: { type: String, required: true },
    restaurants: { type: Schema.Types.ObjectId, ref: 'restaurants' }
  },
  {
    timestamps: true
  }
)

module.exports = neighborhoodSchema

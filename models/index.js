const mongoose = require('mongoose')
const neighborhoodSchema = require('./neighborhood')
const restaurantSchema = require('./restaurant')

const Neighborhood = mongoose.model('Neighborhood', neighborhoodSchema)
const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = {
  Neighborhood,
  Restaurant
}

const Neighborhood = require('../models/neighborhood')
// const restaurant = require('../models/restaurant')
const Restaurant = require('../models/restaurant')

const createHood = async (req, res) => {
  try {
    const neighborhood = await new Neighborhood(req.body)
    await neighborhood.save()
    return res.status(201).json({
      neighborhood
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllHoods = async (req, res) => {
  const neighborhoods = await Neighborhood.find({}).populate('restaurants')
  res.json(neighborhoods)
}

const getHoodById = async (req, res) => {
  try {
    const { id } = req.params
    const neighborhood = await Neighborhood.findById(id).populate('restaurants')
    if (neighborhood) {
      return res.status(200).json({ neighborhood })
    }
    return res
      .status(404)
      .send('Neighborhood with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateHood = async (req, res) => {
  try {
    const neighborhood = await Neighborhood.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(neighborhood)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteHood = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Neighborhood.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Neighborhood deleted')
    }
    throw new Error('Neighborhood not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createRest = async (req, res) => {
  try {
    const restaurant = await new Restaurant(req.body)
    await restaurant.save()
    return res.status(201).json({
      restaurant
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllRests = async (req, res) => {
  const restaurants = await Restaurant.find({})
  res.json(restaurants)
}

const getRestsById = async (req, res) => {
  try {
    const { id } = req.params
    const restaurant = await Restaurant.findById(id)
    if (restaurant) {
      return res.status(200).json({ restaurant })
    }
    return res
      .status(404)
      .send('Restaurant with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateRest = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(restaurant)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteRest = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Restaurant.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Restaurant deleted')
    }
    throw new Error('Restaurant not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllHoods,
  createHood,
  updateHood,
  getHoodById,
  deleteHood,
  getAllRests,
  getRestsById,
  updateRest,
  createRest,
  deleteRest
}

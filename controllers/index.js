const { Neighborhood } = require('../models')

const getAllHoods = async (req, res) => {
  const neighborhoods = await Neighborhood.find({})
  res.json(neighborhoods)
}

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

const getHoodById = async (req, res) => {
  try {
    const { id } = req.params
    const neighborhood = await Neighborhood.findById(id)
    if (!neighborhood) throw Error('Neighborhood not found')
    res.json(neighborhood)
  } catch (e) {
    console.log(e)
    res.send('Neighborhood not found!')
  }
}

module.exports = {
  getAllHoods,
  createHood,
  updateHood,
  getHoodById
}

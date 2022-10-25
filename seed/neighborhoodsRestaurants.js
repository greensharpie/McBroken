const db = require('../db') 
const { Neighborhood, Restaurant} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const hoodOne = await new Neighborhood({
    name: 'Plaza Midwood',
    restaurants: restOne._id
  })
  hoodOne.save()

  const hoodTwo = await new Neighborhood({
    name: 'Dilworth',
    restaurants: restTwo._id
  })
  hoodTwo.save()

  const hoodThree = await new Neighborhood({
    name: 'Wesley Heights',
    restaurants: restThree._id
  })
  hoodThree.save()

  const hoodFour = awai new Neighborhood({
    name: 'South Park',
    restaurants: restFour._id
  })
  hoodFour.save()
}
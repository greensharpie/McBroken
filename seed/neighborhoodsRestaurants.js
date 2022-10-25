const db = require('../db')
const { Neighborhood, Restaurant } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const restOne = await new Restaurant({
    name: `McDonald's`,
    address: '2301 Central Ave, Charlotte, NC 28205',
    phone: `704-375-7587`,
    broken: 'true',
    working: 'false',
    update: 'update'
  })
  restOne.save()

  const restTwo = await new Restaurant({
    name: `McDonald's`,
    address: '2625 South Blvd, Charlotte, NC 28209',
    phone: `704-523-7391`,
    broken: 'false',
    working: 'true',
    update: 'update'
  })
  restTwo.save()

  const restThree = await new Restaurant({
    name: `McDonald's`,
    address: '2625 South Blvd, Charlotte, NC 28209',
    phone: `704-523-7391`,
    broken: 'false',
    working: 'true',
    update: 'update'
  })
  restThree.save()

  const restFour = await new Restaurant({
    name: `McDonald's`,
    address: '6428 Fairview Rd, Charlotte, NC 28210',
    phone: `704-362-676`,
    broken: 'false',
    working: 'true',
    update: 'update'
  })
  restFour.save()

  const neighborhoods = [
    {
      name: 'Plaza Midwood',
      restaurants: restOne._id
    },
    {
      name: 'Dilworth',
      restaurants: restTwo._id
    },
    {
      name: 'Wesley Heights',
      restaurants: restThree._id
    },
    {
      name: 'South Park',
      restaurants: restFour._id
    }
  ]
  await Neighborhood.insertMany(neighborhoods)
  console.log('Created neighborhoods!')
}

const run = async () => {
  await main()
  db.close()
}

run()

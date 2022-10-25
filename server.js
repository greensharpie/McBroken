const { Neighborhood } = require('./models')
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/neighborhoods', async (req, res) => {
  const neighborhoods = await Neighborhood.find({})
  res.json(neighborhoods)
})

app.get('/neighborhoods/:id', async (req, res) => {
  try {
    const { id } = req.params
    const neighborhood = await Neighborhood.findById(id)
    if (!neighborhood) throw Error('Neighborhood not found')
    res.json(neighborhood)
  } catch (e) {
    console.log(e)
    res.send('Neighborhood not found!')
  }
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

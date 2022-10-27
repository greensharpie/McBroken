const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/neighborhoods', controllers.createHood)

router.get('/neighborhoods', controllers.getAllHoods)

router.get('/neighborhoods/:id', controllers.getHoodById)

router.post('/restaurants', controllers.createRest)

router.get('/restaurants', controllers.getAllRests)

router.get('/restaurants/:id', controllers.getRestsById)

router.put('/restaurants/:id', controllers.updateRest)

router.delete('/restaurants/:id', controllers.deleteRest)

module.exports = router

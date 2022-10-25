const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/neighborhoods', controllers.getAllHoods)

router.get('/neighborhoods/:id', controllers.getHoodById)

router.post('/neighborhoods', controllers.createHood)

module.exports = router

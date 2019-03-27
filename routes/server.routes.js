const express = require('express')
const router = express.Router()
module.exports = router

router.use('/api/pets', require('./pet.routes'))
router.use('/api/emergencies', require('./emergency.routes'))
router.use('/api/products', require('./product.routes'))
router.use('/api/lost', require('./lost.routes'))
router.use('/api/found', require('./found.routes'))
router.use('/api/analysis', require('./analytic.routes'))
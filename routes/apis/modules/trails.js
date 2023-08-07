const express = require('express')
const router = express.Router()

const trailController = require('../../../controllers/apis/trail-controller')

const { optionalAuthenticated } = require('../../../middleware/auth')

router.get('/:trailId', optionalAuthenticated, trailController.getTrail)
router.get('/gpx/:trailId', optionalAuthenticated, trailController.getTrailsGPX)
router.get('/', optionalAuthenticated, trailController.getAllTrails)

router.use('/', (req, res) => res.send('this is trail page.'))

module.exports = router

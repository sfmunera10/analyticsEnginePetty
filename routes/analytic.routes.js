const express = require('express')
const router = express.Router()
const ach = require('../models/analytic.model')

/* All pets from Firebase */
router.get('/pls', async (req, res) => {
    await ach.retrievePromise()
    .then(achs => res.json(achs))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

// Routes
module.exports = router
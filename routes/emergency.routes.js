const express = require('express')
const router = express.Router()
const ach = require('../models/emergency.model')

/* All emergencies from Firebase */
router.get('/retrieve', async (req, res) => {
    await ach.retrieveEmergencies()
    .then(achs => res.json(achs))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* All emergencies */
router.get('/', async (req, res) => {
    await ach.getEmergencies()
    .then(achs => res.json(achs))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* One emergency by id */
router.get('/:id', async (req, res) => {
    const id = req.params.id
    await ach.getEmergencyById(id)
    .then(emergency => res.json(emergency))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* Insert a new emergency */
router.post('/', async (req, res) => {
    await ach.createEmergency(req.body)
    .then(emergency => res.status(201).json({
        message: `The emergency #${emergency.id} has been created.`,
        content: emergency
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})

/* Update a emergency */
router.put('/:id', async (req, res) => {
    const id = req.params.id
    await ach.updateEmergency(id, req.body)
    .then(emergency => res.json({
        message: `The emergency #${emergency.id} has been updated`,
        content: emergency
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

/* Delete a emergency */
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    await ach.deleteEmergency(id)
    .then(emergency => res.json({
        message: `The emergency #${id} has been deleted and all the elements have been rearranged`
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})


// Routes
module.exports = router
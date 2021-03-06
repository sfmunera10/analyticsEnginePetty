const express = require('express')
const router = express.Router()
const ach = require('../models/found.model')

/* All pets from Firebase */
router.get('/retrieve', async (req, res) => {
    await ach.retrieveFounds()
    .then(achs => res.json(achs))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* All pets */
router.get('/', async (req, res) => {
    await ach.getFounds()
    .then(achs => res.json(achs))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* One pet by id */
router.get('/:id', async (req, res) => {
    const id = req.params.id
    await ach.getFoundById(id)
    .then(pet => res.json(pet))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* Insert a new pet */
router.post('/', async (req, res) => {
    await ach.createFound(req.body)
    .then(pet => res.status(201).json({
        message: `The pet #${pet.id} has been created.`,
        content: pet
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})

/* Update a pet */
router.put('/:id', async (req, res) => {
    const id = req.params.id
    await ach.updateFound(id, req.body)
    .then(pet => res.json({
        message: `The pet #${pet.id} has been updated`,
        content: pet
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

/* Delete a pet */
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    await ach.deleteFound(id)
    .then(pet => res.json({
        message: `The pet #${id} has been deleted and all the elements have been rearranged`
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
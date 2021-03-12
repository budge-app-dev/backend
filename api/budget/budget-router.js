const express = require('express')
const Budget = require('./budget-model')

const router = express.Router()

router.post('/:user_id/budget', (req, res) => {
    Budget.postBudget(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json({message: `Server error: ${err}`})
        })
})

router.get('/:user_id/budget', (req, res) => {
    Budget.getBudget(req.params.user_id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json({message: `Server error: ${err}`})
        })
})

router.put('/:user_id/budget/', (req, res) => {
    Budget.updateBudget(req.params.user_id, req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json({message: `Server error: ${err}`})
        })
})

module.exports = router


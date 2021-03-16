const express = require('express')
const Category = require('./category-model')

const router = express.Router()


router.get('/', (req, res) => {
    Category.find()
    .then(categories => {
        res.status(200).json(categories)
    })
    .catch(error => {
        res.status(500).json({message: error.message})
    })
})
router.get('/:user_id/categories', (req, res) => {
    Category.find()
        .then(data => {
            Category.findCreated(req.params.user_id)
                .then(createdData => {
                    res.json({categories: data, created_categories: createdData})
                })
                .catch(err => {
                    res.status(500).json({message: `Server error: ${err}`})
                })
        })
        .catch(err => {
            res.status(500).json({message: `Server error: ${err}`})
        })
})

router.post('/:user_id/categories', (req, res) => {
    Category.create(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json({message: `Server error: ${err}`})
        })
})

router.post('/:user_id/category_pairs', (req, res) => {
    if (req.body.category_id) {
        Category.createPair(req.params.user_id, req.body.category_id)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({message: `Server error: ${err}`})
            })
    } else {
        Category.createCreatedPair(req.params.user_id, req.body.id)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({message: `Server error: ${err}`})
            })
    }
})

router.get('/:user_id/user_categories', (req, res) => {
    Category.getUserCategories(req.params.user_id)
        .then(data => {
            try {
                Category.getUserCreatedCategories(req.params.user_id)
                    .then(info => {
                        res.json({categories: data, created_categories: info})
                    })
            } catch (e) {
                res.json(data)
            }
        })
        .catch(err => {
            res.status(500).json({message: `Server error: ${err}`})
        })
})

router.delete('/:user_id/user_categories/:id', (req, res) => {
    Category.removePair(req.params.id)
        .then(() => {
            res.json('pair successfully removed!')
        })
        .catch(err => {
            res.status(500).json({message: `Server error: ${err}`})
        })
})

module.exports = router








const express = require('express')

const cors = require('cors')

const userRouter = require('./users/user-router')
const categoryRouter = require('./categories/category-router')
const budgetRouter = require('./budget/budget-router')

const server = express()

server.use(cors())

server.use(express.json())

server.use('/api/users', userRouter)
server.use('/api/categories', categoryRouter)
server.use('/api/budget', budgetRouter)

module.exports = server
const db = require('../../data/dbConfig')

module.exports = {
    postBudget,
    getBudget,
    updateBudget
}

async function postBudget(budget) {
    const a = await db('budgets').insert(budget)
    return {data: a, message: 'budget added!'}
}

function getBudget(id) {
    return db('budgets').where('user_id', id)
}

async function updateBudget(id, budget) {
    await db('budgets').where('user_id', id).update(budget)
    return {data: budget, message: 'budget updated!'}
}
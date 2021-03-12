const db = require('../../data/dbConfig')

module.exports = {
    find,
    findCreated,
    findById,
    create,
    createPair,
    createCreatedPair,
    getUserCategories,
    getUserCreatedCategories,
    removePair
}

function find() {
    return db('categories')
}

function findCreated(id) {
    return db('created_categories').where('user_id', id)
}

function findById(id) {
    return db('categories').where('category_id', id)
}

async function create(category) {
    const a = await db('created_categories').insert(category)
    return {data: a, message: 'created!'}
}

async function createPair(user_id, category_id) {
    const a = await db('user_categories').insert(user_id, category_id)
    return {data: a, message: 'paired!'}
}

async function createCreatedPair(user_id, id) {
    const a = await db('user_categories').insert(user_id, id)
    return {data: a, message: 'paired!'}
}

function getUserCategories(user_id) {
    return db('categories as c')
        .join('user_categories as u', 'c.category_id', '=', 'u.category_id')
        .where('u.user_id', user_id)
}

function getUserCreatedCategories(user_id) {
    return db('created_categories as c')
        .join('user_categories as u', 'c.id', '=', 'u.category_id')
        .where('u.user_id', user_id)
}

function removePair(id) {
    return db('user_categories').where('user_category_id', id).del()
}


const db = require('../../data/dbConfig')

module.exports = {
    create,
    update,
    getByUsername
}

async function create(data) {
    const a = await db("users").insert(data);
    return { data: a, Message: `User ${a.username} created!` };
}
  
async function update(id, data) {
    await db("users").where("user_id", id).update(data);
    return { data: data, Message: `User ${data.username} updated!` };
}

function getByUsername(name) {
    return db("users").where("username", name);
}
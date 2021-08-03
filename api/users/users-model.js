const db = require("../../data/connection");


function get() {
    return db("books")
}

function getBy(id) {
    return db("books")
    .where("id", id)
    // .first()
}

function add(book) {
    return db("books"
    .insert(book, "id"))
    .then(([id]) => get(id))
}

function update(id, changes) {
    return db("books")
    .where("id", id)
    .update(changes)
    .then(count => count > 0 ? getBy(id) : null)
}

function remove(id) {
    return db("books")
    .where("id", id)
    .del()
}

module.exports = {
    get,
    getBy,
    add,
    update,
    remove
}
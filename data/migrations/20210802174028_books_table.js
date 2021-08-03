
exports.up = function(knex) {
    return knex.schema
    .createTable("users", tbl => {
        tbl.increments("user_id")
        tbl.string("username", 200)
        .unique()
        .notNullable()
        tbl.string("password", 200)
        .notNullable()
        tbl.string("name", 200)
        .notNullable()
    })
    .createTable("books", tbl => {
        tbl.increments("book_id");
        tbl.string("title", 200)
        .unique()
        .notNullable()
        tbl.string("genre", 200)
        .notNullable()
        tbl.string("description", 300)
        .notNullable()
        tbl.string("author", 200)
        .notNullable()
        // tbl.interger("user_id")
        // .unsigned()
        // .references("user_id")
        // .inTable("users")
    })
    .createTable("manga", tbl => {
        tbl.increments("manga_id")
        tbl.string("title", 200)
        .unique()
        .notNullable()
        tbl.string("genre", 200)
        .notNullable()
        tbl.string("description", 300)
        .notNullable()
        tbl.string("author", 200)
        .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("books")
    .dropTableIfExists("manga")
};

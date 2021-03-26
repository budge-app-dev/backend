
exports.up = function(knex) {
    return knex.schema
        .createTable('users', table => {
            table.increments('user_id')
            table.string('username').notNullable()
            table.string('password').notNullable()
            table.integer('total_budget')
        })
        .createTable('categories', table => {
            table.increments('category_id')
            table.string('category_name')
            table.integer('user_created')
        })
        .createTable('budgets', table => {
            table.increments('budget_id')
            table
                .integer('user_id')
                .unsigned()
                .references('user_id')
                .inTable('users')
                .notNullable()
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            table
                .integer('category_id')
                .unsigned()
                .references('category_id')
                .inTable('categories')
                .notNullable()
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            table.integer('limit').notNullable()
            table.integer('spent')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('budgets')
        .dropTableIfExists('user_categories')
        .dropTableIfExists('created_categories')
        .dropTableIfExists('categories')
        .dropTableIfExists('users')
};

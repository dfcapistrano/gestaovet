

exports.up = function(knex) {
    return knex.schema.createTable('cliente', function (table) {
        table.string('id').primary();
        table.string('senha').notNullable();
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('cidade').notNullable();
        table.string('estado', 2).notNullable();
        table.string('status').notNullable(); // Permissão no sistema (User, Admin)
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('cliente');
};

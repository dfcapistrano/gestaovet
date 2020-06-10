exports.up = function(knex) {
    return knex.schema.createTable('pet', function (table) {

        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('raca').notNullable();
        table.string('sexo',1).notNullable();
        table.string('especie').notNullable();
        table.decimal('peso').notNullable();
        table.integer('idade').notNullable();
        
        table.string('cliente_id').notNullable();
        table.foreign('cliente_id').references('id').inTable('cliente');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('pet');
};

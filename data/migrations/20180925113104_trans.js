exports.up = function(knex, Promise) {
    return knex.schema.createTable('trans', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.integer('cat_id').unsigned();
      table.foreign('cat_id').references('catagories.id');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('trans');
  };

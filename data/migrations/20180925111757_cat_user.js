
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cat_user', (table) => {
    table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id');
    table.integer('cat_id').unsigned();
    table.foreign('cat_id').references('catagories.id');
    table.unique(['user_id', 'cat_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cat_user');
};

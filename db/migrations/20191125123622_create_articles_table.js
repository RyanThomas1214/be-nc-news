const topics = require("./20191125121401_create_topic_table");
const users = require("./20191125123220_create_users_table");

exports.up = function(knex) {
  console.log("Creating Articles Table");
  return knex.schema.createTable("articles", articlesTable => {
    articlesTable.increments("article_id").primary();
    articlesTable.string("title");
    articlesTable.string("body");
    articlesTable.integer("votes").defaultTo(0);
    articlesTable.string("topic").references(topics.slug);
    articlesTable.string("author").references(users.username);
    articlesTable.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  console.log("Dropping Articles Table");
  return knex.schema.dropTable("articles");
};
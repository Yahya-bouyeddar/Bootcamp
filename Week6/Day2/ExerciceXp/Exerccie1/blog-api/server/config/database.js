const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:12345678@localhost:5432/blogdb"
);

module.exports = sequelize;

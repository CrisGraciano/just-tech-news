// This imports Sequelize Constructor from the library of dependencies
const Sequelize = require('sequelize');

require('dotenv').config();

// Creates connection to our databse, pass in my MYSQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;
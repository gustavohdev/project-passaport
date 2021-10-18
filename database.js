const Sequelize = require("sequelize")

const user = "postgres"
const password = "admin"
const host = "localhost"
const database = "testingpassaport"

const sequelize = new Sequelize(database, user, password, {
    host,
    dialect: "postgres",
    logging: false,
  })
  
  module.exports = sequelize
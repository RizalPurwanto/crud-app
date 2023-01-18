const sequelize = require("sequelize")

const db = new sequelize("db_master","db_user","password", {
    host:"127.0.0.1",
        dialect: "postgres"
});

db.sync({});

module.exports = db;
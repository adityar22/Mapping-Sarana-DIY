const {Sequelize} = require('sequelize')

const db = new Sequelize('testlogin','postgres','atA_251201',{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = db;
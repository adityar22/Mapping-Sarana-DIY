const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "raven03",
    database: "mappingDIY"
})

module.exports = client
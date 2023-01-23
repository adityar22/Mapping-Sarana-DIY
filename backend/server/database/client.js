const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "atA_251201",
    database: "mapDb"
})

module.exports = client
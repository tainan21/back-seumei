const mysql = require('mysql2')

const pool = mysql.createPool({
    "user": "root",
    "password": "Valorant_omen!96",
    "database": "galaxiaburguer",
    "host": "localhost",
    "port": 3306
})

 
exports.pool = pool;

/*
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/image', 
{useNewUrlParser: true, useUnifiedTopology: true })

mongoose.Promise = global.Promise

module.exports = mongoose
*/


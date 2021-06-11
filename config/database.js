const { Pool } = require('pg');
const pool = new Pool(
    {
        port: process.env.db_port,
        host: process.env.db_host,
        user: process.env.db_user,
        password: process.env.db_password,
        database: process.env.db_database,
        connectionLimit: process.env.db_connectionLimit

    }
)

// for reuse the connection
module.exports = pool;

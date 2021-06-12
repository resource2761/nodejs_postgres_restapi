const { Pool } = require('pg');
const pool = new Pool(
    {
        // port: process.env.db_port,
        // host: process.env.db_host,
        // user: process.env.db_user,
        // password: process.env.db_password,
        // database: process.env.db_database,
        // connectionLimit: process.env.db_connectionLimit

        port: 5432,
        host: 'ec2-54-91-188-254.compute-1.amazonaws.com',
        user: 'gexqfvioyuwjmi',
        password: 'f9c47b9a046ca5876bddd8d16b0b4745dc4d55e3030b0baa232d0b35886acc78',
        database: 'dcjaks1eo81bnq',
        connectionLimit: 10

    }
)

// for reuse the connection
module.exports = pool;

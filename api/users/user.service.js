// create database service
const pool = require('../../config/database');

// export module with the method "create" which receive "data" from controller
// and "callback"
module.exports = {

    // 'create' service to insert data
    create: (data, callback) => {

        // get the database pool to insert data
        pool.query(`insert into customers(email,name,active,password) values($1,$2,$3,$4)`,
            [
                data.email,
                data.name,
                data.active,
                data.password
            ],

            // callback place here
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }

                // if not error
                return callback(null, results);
            }
        )
    },

    // 'getAllCustomers' service
    getAllCustomers: (callback) => {
        pool.query(`select id,email,name,active,password from customers`, [],
            //callback place here
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }

                // if not error
                return callback(null, results);
            }
        )
    },


    // 'getCustomerById' service
    getCustomerById: (id, callBack) => {
        pool.query(
            `select id,email,name,active,password from customers where id = $1`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    // getCustomerByEmail service
    getCustomerByEmail: (data, callBack) => {
        console.log("from service:",data)
        pool.query(
            `select * from customers where email = $1`,
            [data.email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }

                //console.log("from service results:",results)
                return callBack(null, results);
            }
        );
    },

    // findCustomerByEmail service

    findCustomerByEmail: (data, callBack) => {
        console.log("from service:",data)
        pool.query(
            `select id,email,name,active,password from customers where email = $1`,
            [data.email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }

                console.log("from service results:",results)

                return callBack(null, results); // for a single row return
            }
        );
    },

    // 'updatecustomer' service to update data after give the appropritae id
    updateCustomer: (data, callback) => {

        // get the database pool to insert data
        pool.query(`update customers set email=$1,name=$2,active=$3,password=$4 where id=$5`,
            [
                data.email,
                data.name,
                data.active,
                data.password,
                data.id
            ],

            // callback place here
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }

                // if not error
                return callback(null, results);
            }
        )
    },


    // deleteCustomerById service to delete record after giving the appropriate id
    deleteCustomerById: (id, callBack) => {
        pool.query(`delete from customers where id=$1`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }

                return callBack(null, results)
            }
        )
    }

}
// npm install dotenv used to hide the database connection from others
// to use dotenv use the following
require('dotenv').config();

const express = require('express');
const app = express();
// import the router
const userrouter=require("./api/users/user.router");

// convert to json object
app.use(express.json());

// define the router begin path as /customer/data
app.use("/customer/data",userrouter);
 

// use .env from process.env
app.listen(process.env.app_port, () => {
    console.log('server is running on port', process.env.app_port);
})
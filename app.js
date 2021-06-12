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
 
//const PORT = process.env.PORT || 3000;
// use .env from process.env
// app.listen(PORT, () => {
//     console.log(`server is running on port ${PORT}`);
// })



const PORT = process.env.$PORT || 80;
var server = app.listen(process.env.$PORT, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is running at http://%s", process.env.$PORT);
});
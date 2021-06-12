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
//app.use("/customer/data",userrouter);

app.set("/customer/data",userrouter);
 
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });
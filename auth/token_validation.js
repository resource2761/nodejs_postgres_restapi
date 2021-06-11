const {verify} = require("jsonwebtoken");
module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string upto 7th position
      //  if a token is : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjMzODkxOTAsImV4cCI6MTYyMzM5Mjc5MH0.atWZLiakDSWo1m8Xagd4qTcjxc_nMd8_wH0ZE8-_qDw
      

      token = token.slice(7); // removes upto "eyJhbGc" from token
      verify(token, "qwe1234", (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Invalid Token..."
          });
        } else {
          next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User"
      });
    }
  }
};
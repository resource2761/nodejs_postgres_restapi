// use controller
const {createuser, getcustomerbyid, getallcustomers, 
    updatecustomer, deletecustomerbyid, login, findcustomer} = require('./user.controller');

const { checkToken } = require("../../auth/token_validation");

const router = require('express').Router();

router.post('/post',createuser); // Insert data with router string and associate  controller name
router.get('/:id',getcustomerbyid); // get data with router string and associate controller name
router.get('/',getallcustomers); // get data with router string and associate controller name
router.patch('/',updatecustomer) // Update data with router string and associate controller name
router.delete('/:id',deletecustomerbyid) // Delete data with router string and associate controller name
router.post('/login',login);


// router.post('/post',checkToken,createuser); // Insert data with router string and associate  controller name
// router.get('/:id',checkToken,getcustomerbyid); // get data with router string and associate controller name
// router.get('/',checkToken,getallcustomers); // get data with router string and associate controller name
// router.patch('/',checkToken,updatecustomer) // Update data with router string and associate controller name
// router.delete('/:id',checkToken,deletecustomerbyid) // Delete data with router string and associate controller name
// router.post('/login',login);
// router.post('/findcustomer',findcustomer);






// exports the module
module.exports=router;






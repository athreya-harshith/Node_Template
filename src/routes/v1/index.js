const express = require('express');
const route = express.Router();

const {InfoController} = require('../../controllers');
// route.get('/info',(req,res)=>{
//     res.send({msg:"OK"});
// }); this is not compact one as we can have better implementation of this controller 
//  by writing this in the controller module and importing it into here
 route.get('/info', InfoController.info);

module.exports = route;

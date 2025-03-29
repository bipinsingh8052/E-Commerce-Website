const express =require("express");
const route =express.Router();
const custmorController =require("../controller/custmorController")

route.post("/signup",custmorController.LoginPage)




module.exports=route
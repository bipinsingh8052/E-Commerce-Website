const express =require("express");
const route =express.Router();
const adminController =require("../controller/AdminController")



route.post("/signup",adminController.SignUp)
route.post("/login",adminController.LOginPage)



module.exports=route
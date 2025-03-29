const express =require("express");
const route =express.Router();
const adminController =require("../controller/AdminController")



route.post("/signup",adminController.LoginPage)




module.exports=route
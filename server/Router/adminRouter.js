const express =require("express");
const route =express.Router();
const adminController =require("../controller/AdminController")



route.post("/signup",adminController.SignUp)
route.post("/login",adminController.LOginPage)
route.post("/authora",adminController.AurthationPage)
route.post("/addProduct",adminController.Add_the_Product_Page)


module.exports=route
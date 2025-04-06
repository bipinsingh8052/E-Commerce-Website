const express =require("express");
const route =express.Router();
const custmorController =require("../controller/custmorController")

// route.post("/signup",custmorController.LoginPage)
route.get("/primecart",custmorController.PrimeCartPage)
route.get("/normalcart" ,custmorController.NormalCartPage)
route.get("/options",custmorController.FetchCatgurypage);
route.post("/catugry" ,custmorController.CatguryAllPage);
route.post("/ShowCartDetails",custmorController.CartDeatailpage)
module.exports=route
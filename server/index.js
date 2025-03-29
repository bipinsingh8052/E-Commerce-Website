const express =require("express");
const app =express();
const cors=require("cors");
const bodyParser =require("body-parser");
require('dotenv').config();
const DbConnecting =require("./Utlis/dbConnected");
const AdminRout =require("./Router/adminRouter");
const CustmorRoute =require("./Router/custmorRouter")

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// // parse application/json
app.use(bodyParser.json())

DbConnecting.Connected();

let port = process.env.PORT || 9000;



app.use("/admin", AdminRout)
app.use("/custmor",CustmorRoute)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
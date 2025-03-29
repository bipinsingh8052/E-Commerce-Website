const mongoose =require("mongoose");
const Schema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true,
    },
    number:{
        type:Number,
        require:true
    }

})


module.exports=mongoose.model("CustmorRegistration",Schema)
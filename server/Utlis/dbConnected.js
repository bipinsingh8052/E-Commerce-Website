const mongoose =require("mongoose");

const Connected=()=>{
    try {
        mongoose.connect(process.env.DBconnect).then(()=>{
            console.log("This is DB is connected")
        })
    } catch (error) {
        console.log("Not connect the data base")
    }
}



module.exports={Connected};
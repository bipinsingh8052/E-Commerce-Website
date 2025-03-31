const AdminModel =require("../model/adminRegistration")
const bcrypt =require("bcryptjs")

const SignUp =async(req,res)=>{
    // console.log(req.body);
    const {
        name,
        Number,
        email,
        password
      }=req.body;
      let salt =await bcrypt.genSalt(10);
      let hasPassword=await bcrypt.hash(password,salt);

    
      try {

        let findData =await AdminModel.findOne({Email:email});
        if(findData){
          return res.status(400).send({msg:"Your have allready account"});
        }
        else{
            let data =await AdminModel.create({
                name:name,
                Email:email,
                Password:hasPassword,
                number:Number
            })
           return res.status(201).send({msg:"SignUp is Successfully completed"})
        }
       
      } catch (error) {
        res.status(500).send({msg:"Server error"})
      }
}


const LOginPage=async(req,res)=>{
    // console.log(req.body);
    const { email, password}=req.body;
    try {

        let data =await AdminModel.findOne({Email:email});
        if(!data){
            return res.status(400).send({msg:"Invalid Email please insert valid email...!!!"})
        }
        let hasPassword = await bcrypt.compare(password,data.Password);
        console.log(hasPassword);
        res.send("okk")
    } catch (error) {
        res.status(500).send({msg:"Server Error"})
    }
}
module.exports={
    SignUp,
    LOginPage
}
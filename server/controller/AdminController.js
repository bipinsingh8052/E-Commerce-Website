const AdminModel =require("../model/adminRegistration")
const bcrypt =require("bcryptjs")
const jwt =require("jsonwebtoken")
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
        // console.log(hasPassword);
        if(!hasPassword){
           return res.status(400).send({msg:"Invalid Password ...!"})
        }
        const token =await jwt.sign({id:data._id},process.env.priviteKey,{ expiresIn: '15day' } )
        // console.log(token)

        res.status(200).send({msg:"Login is Successfully ...!",token:token})
        
    } catch (error) {
        res.status(500).send({msg:"Server Error"})
    }
}



const AurthationPage=async(req,res)=>{
    const token=req.header("tokensid");
    // console.log(token)
    try {
        let searchData=null
        const vers=await jwt.verify(token,process.env.priviteKey,(error,auth)=>{
            
            if(auth){
                // console.log("match the token",auth)
                searchData =auth.id;
                
                // res.status(200).send(auth)
            }
        
        });
        // console.log(searchData)
            let data= await AdminModel.findById(searchData).select("-Password")
            // console.log(data);
            res.status(200).send(data);

    } catch (error) {
        res.status(500).send("not Found");
    }

}
module.exports={
    SignUp,
    LOginPage,
    AurthationPage
}
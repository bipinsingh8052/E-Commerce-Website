const CustmorModel=require("../model/custmorRegistration");
const ProductModel =require("../model/Product");

const PrimeCartPage =async(req,res)=>{
    try {
        let data =await ProductModel.find({premium:"Yes"});
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({msg:"server error"});
    }
    
}

const NormalCartPage =async(req,res)=>{
    try {
        
        let data =await ProductModel.find({premium:"No"})
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({msg:"Server Error"});
    }
}

const FetchCatgurypage=async(req,res)=>{
try {
    let data =await ProductModel.find();
    // this is remove it duplicate element  never forget this 
    const uniqueData = Array.from(new Map(data.map(item => [item.catgury, item])).values());
    console.log(uniqueData);
    res.status(200).send(uniqueData)
} catch (error) {
    res.status(500).send("server error");
}
}




// this is catugray when you click that time so this api 
const CatguryAllPage =async(req,res)=>{
    console.log(req.body);
    res.send("okk")
}


// Show all info of cart detail and so the data in the display 
const CartDeatailpage =async(req,res)=>{
    // console.log(req.body);
    const{ id }=req.body;
    try {
        let data=await ProductModel.findById(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("server Error");
    }
}
module.exports={
    PrimeCartPage,
    NormalCartPage,
    FetchCatgurypage,
    CatguryAllPage,
    CartDeatailpage
}
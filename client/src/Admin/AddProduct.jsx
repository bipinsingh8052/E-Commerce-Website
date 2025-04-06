import {useEffect, useState} from 'react'
import '../css/addProduct.css'
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import Url from '../cofi/BaseUrl';
export default function AddProduct() {
   
    let [input,setinput]=useState({});
    let[defaultimg,setdefaultImg]=useState("");
    let[firstimgUrl,setfirstImgUrl]=useState("");
    let[secondimg,setSecondImg]=useState("");
    let[secondimgUrl,setSecondImgUrl]=useState("");
    let[thirdImg,setThirdImg]=useState("");
    let[thirdimgUrl,setThirdImgUrl]=useState("");
    let [fourImg,setFourImg]=useState("");
    let[FourImgUrl,setFourImgUrl]=useState("");
    let[fiveimg,setFiveImg]=useState("");
    let[fiveImgUrl,setFiveImgUrl]=useState("")
    let[prime,setPrime]=useState("No")
    let[loader,setloader]=useState(false);
    const HandleOption=(e)=>{
        setPrime(e.target.value)
    }
    const HandleFourImg=(e)=>{
        let files =e.target.files[0];
        setFourImg(files);
    }

    const HandleFiveImg=(e)=>{
        let files=e.target.files[0];
        setFiveImg(files);

    }

    const HandleThirdImg=(e)=>{
        let files =e.target.files[0];
        // console.log(files);
        setThirdImg(files);
    }
    const HandleSecondImg=(e)=>{
        let files =e.target.files[0];
        // console.log(files);
        setSecondImg(files);
    }


   


    const HandleDefaultimg=(e)=>{
        let files =e.target.files[0];
        // console.log(files);
        setdefaultImg(files);

        
    }
    const HandleInput=(e)=>{
        let {name,value}=e.target;
        setinput(values=>({...values,[name]:value}))
    }


    const handleDefaultApi=async()=>{
        const formData=new FormData();
    formData.append("file",defaultimg);
    formData.append("upload_preset","bankImages")
    formData.append("cloud_name","dxhzzyccc")
    let api="https://api.cloudinary.com/v1_1/dxhzzyccc/image/upload";
    let response =await axios.post(api,formData)
    // console.log(response.data.url)
    setfirstImgUrl(response.data.url)
    // setimgset(response.data.url)
    
    }

    // 
    // thisis btn function
    const handlebtn=()=>{
        console.log(input,firstimgUrl,secondimgUrl,thirdimgUrl,FourImgUrl,firstimgUrl);
    }


    // submit form
    const HandleSubmitform=async(e)=>{
        e.preventDefault();
        setloader(true);

        let api=`${Url}/admin/addProduct`;
        try {
            let reponse =await axios.post(api,{firstimgUrl:firstimgUrl,secondimgUrl:secondimgUrl,thirdimgUrl:thirdimgUrl,FourImgUrl:FourImgUrl,fiveImgUrl:firstimgUrl,adminid:localStorage.getItem("AdminId"),premium:prime,...input})
            console.log(reponse.data);
            setloader(false);
            toast.success(reponse.data);
        } catch (error) {
            setloader(false)
         toast.error("error.response.data.msg")   
        }
    }


    useEffect(()=>{
        handleDefaultApi()
    },[defaultimg])



    const handlesecondImgUrl=async()=>{
        const formData=new FormData();
        formData.append("file",defaultimg);
        formData.append("upload_preset","bankImages")
        formData.append("cloud_name","dxhzzyccc")
        let api="https://api.cloudinary.com/v1_1/dxhzzyccc/image/upload";
        let response =await axios.post(api,formData)
        console.log(response.data.url)
        setSecondImgUrl(response.data.url)
    }

    useEffect(()=>{
        handlesecondImgUrl()
    },[secondimg])


    const handleThirdImgUrl=async()=>{
        const formData=new FormData();
        formData.append("file",defaultimg);
        formData.append("upload_preset","bankImages")
        formData.append("cloud_name","dxhzzyccc")
        let api="https://api.cloudinary.com/v1_1/dxhzzyccc/image/upload";
        let response =await axios.post(api,formData)
        // console.log(response.data.url)
        setThirdImgUrl(response.data.url);
    }
    useEffect(()=>{
        handleThirdImgUrl()
    },[thirdImg])


    const handleFourImgUrl=async()=>{
        const formData=new FormData();
        formData.append("file",defaultimg);
        formData.append("upload_preset","bankImages")
        formData.append("cloud_name","dxhzzyccc")
        let api="https://api.cloudinary.com/v1_1/dxhzzyccc/image/upload";
        let response =await axios.post(api,formData)
        // console.log(response.data.url)
        setFourImgUrl(response.data.url)
    }
    useEffect(()=>{
        handleFourImgUrl()
    },[fourImg])


    const handleFiveImgUrl=async()=>{
        const formData=new FormData();
        formData.append("file",defaultimg);
        formData.append("upload_preset","bankImages")
        formData.append("cloud_name","dxhzzyccc")
        let api="https://api.cloudinary.com/v1_1/dxhzzyccc/image/upload";
        let response =await axios.post(api,formData)
        // console.log(response.data.url)
        setFiveImgUrl(response.data.url);
    }

    useEffect(()=>{
        handleFiveImgUrl()
    },[fiveimg])
  return (
    <>
      <div className="addProduct">


{
    (loader)?<div className="loader-container">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
  :

        <div className="addProduct_Section">
            <div className="addProduct_section_first">
                <h1>Add your Product </h1>
                <form onSubmit={HandleSubmitform} >
                    <div className="name">
                        <label htmlFor="">Enter the Product Name :</label>
                        <input type="text" required name='name' onChange={HandleInput} />
                    </div>
                    <div className="des">
                        <label htmlFor="">Enter the Product Details : </label>
                        <input type="text" required name="des" onChange={HandleInput} />
                    </div>
                    <div className="Catgury">
                        <label htmlFor="">Enter the product Catugary :</label>
                        <input type="text" required  name='catgury' onChange={HandleInput}/>
                    </div>
                    <div className="SubCatgury">
                        <label htmlFor="">Enter the Product Sub-Catugary : </label>
                        <input type="text" required  name='subcatgu' onChange={HandleInput}/>
                    </div>
                    <div className="brand">
                        <label htmlFor="">Enter the Brand Name :</label>
                        <input type="text" required  name="brandname" onChange={HandleInput}/>
                    </div>
                    <div className="primer">
                        <label htmlFor="">Enter your Product  is Premium :</label>
                        <select name="premium" onChange={HandleOption} value={prime} >
                          <option value="Yes">Yes</option>
                          <option value="No" selected>No</option>
                          </select>
                    </div>
                    <div className="price">
                        <label htmlFor="">Enter the max price :</label>
                        <input type="number" required name='price' onChange={HandleInput} />

                    </div>
                    <div className="sellingPrice">
                        <label htmlFor="">Enter the Selling price :</label>
                        <input type="number"  required name='sellprice' onChange={HandleInput}/>
                    </div>
                    <div className="discount">
                        <label htmlFor="">Enter the Discount offer</label>
                        <input type="number"  required name='discount' onChange={HandleInput} />
                    </div>
                    <div className="defaultimg">
                        <label htmlFor="">Enter the Default Img :</label>
                        <input type="file"  required name='defaultmg' onChange={HandleDefaultimg} />
                    </div>
                    <div className="allimg">
                        <div className='img-input-wrapper'>
                        <label htmlFor="">Select first img </label>
                        <input type="file"   required name='secondimg' onChange={HandleSecondImg}/>
                        
                        </div>
                    </div>
                    <div className="allimg">
                        <div>
                        <label htmlFor="">Select second img </label>
                        <input type="file"   required name='thirdimg' onChange={HandleThirdImg}/>
                        </div>
                    </div>
                    <div className="allimg">
                        <div>
                        <label htmlFor="">Select Third img </label>
                        <input type="file"   required name='Fourimg' onChange={HandleFourImg}/>
                        </div>
                    </div>
                    <div className="allimg">
                        <div>
                        <label htmlFor="">Select Fourth img </label>
                        <input type="file"   required name='fiveimg' onChange={HandleFiveImg}/>
                        </div>
                    </div>

                    <button onClick={handlebtn}>Add Product</button>
                </form>
            </div>
            <div className="addProduct_Section_second">
                <div className="cartinfo">
                    <div className="Card_started">
                        <div className="img">
                            <img src={firstimgUrl} alt="Upload your img" />
                            <span>
                                <FaHeart/>
                            </span>
                        </div>
                        <div className="heading">
                            <p>{input.name} </p>
                            <h1>₹ {input.sellprice} <del>₹{input.price}</del></h1>
                            <span>Free Delivery</span>
                            <div className='reating'> <p>4.1 <FaStar/></p> <span>788 Reviews</span></div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        }
      </div>
      <Toaster/>
    </>
  )
}

import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import '../css/shopCart.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Url from '../cofi/BaseUrl'
import axios from "axios";
export default function ShopCarts() {
    let[data,setData]=useState([]);
    let loading=async()=>{
        let api =`${Url}/custmor/normalcart`
        try {
            let response =await axios.get(api);
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    let nav=useNavigate()
    const endData=(id)=>{
        console.log("click")
        
        nav(`/ShowCart/${id}`)
    }

    useEffect(()=>{loading()},[])
  return (
    <div className="ShopCart">
           <div className="innerShopCarts">
           <h1>Best Deal on cart </h1>
           <div className="all_primeCarts">
           
                        {
                            data.map((e,index)=>{return(
                                <div className="Card_started"key={index} onClick={()=>{endData(e._id)}} style={{cursor:"pointer"}} >
                            <div className="img">
                                <img src={e.firstimgUrl} alt="Upload your img" />
                                <span>
                                    <FaHeart/>
                                </span>
                            </div>
                            <div className="heading">
                                <p>{e.Productname}</p>
                                <h1>₹ {e.price}<del>₹ {e.sellprice}</del></h1>
                                <span>Free Delivery</span>
                                <div className='reating'> <p>4.1 <FaStar/></p> <span>788 Reviews</span></div>
                                
                            </div>
                            
                        </div>
                            )})
                        }


                        
           </div>
           </div>
            
        </div>
  )
}

import { useEffect, useState } from 'react';
import '../css/primeCart.css'
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Url from '../cofi/BaseUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function PrimeCart() {
    let [data,setData]=useState([]);


    let nav=useNavigate();
    const ShowCart=(id)=>{
        nav(`/ShowCart/${id}`)
    }


    let Loading=async()=>{
        let api =`${Url}/custmor/primecart`
        let response =await axios.get(api);
        console.log(response.data);
        setData(response.data)
    }
    useEffect(()=>{Loading()},[])
  return (
    <div className="PrimeCart">
       <div className="innerPrimeCarts">
       <h1>Best Premium Deal on cart </h1>
       <div className="all_primeCarts">
       
                    {
                        data.map((e,index)=>{
                            return(
                                <div key={index} className="Card_started" onClick={()=>{ShowCart(e._id)}} >
                        <div className="img">
                            <img src={e.firstimgUrl} alt="Upload your img" />
                            <span>
                                <FaHeart/>
                            </span>
                        </div>
                        <div className="heading">
                            <p>{e.Productname }</p>
                            <h1>₹ {e.sellprice} <del>₹ {e.price}</del></h1>
                            <span>Free Delivery</span>
                            <div className='reating'> <p>4.1 <FaStar/></p> <span>788 Reviews</span></div>
                            
                        </div>
                        
                    </div>
                            )
                        })
                    }

                 


       </div>
       </div>
        
    </div>
  )
}

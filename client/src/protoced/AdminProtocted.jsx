import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Url from '../cofi/BaseUrl';
import axios from 'axios';
export default function AdminProtocted(props) {
    let {Child}=props;
    let nav=useNavigate();
    let name;
    let loading=async()=>{
        
        let token=localStorage.getItem("token")
        // console.log(token);
        if(!token){
            nav("/adminlogin")
        }
        if(token){
            nav("/admindas")
        }
        let api =`${Url}/admin/authora`;
        try {
            
            let response =await axios.post(api,null,{headers: { "tokensid": token }});
            console.log(response.data);
            name=response.data.name;
            console.log(name)
        } catch (error) {
            console.log("error");
            nav("/adminlogin")
        }
    }
    useEffect(()=>{
        loading();
    },[])
  return (
    <>
        <Child/>

      
    </>
  )
}

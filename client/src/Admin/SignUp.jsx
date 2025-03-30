import { useState } from "react"
import "../css/adminSignUp.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
// import BaseUrl from "../Confi";
import toast, { Toaster } from 'react-hot-toast';
export default function SignUp() {
    let [loader,setloader]=useState(false)
    let [sign,setsign]=useState({});
  
    let nav =useNavigate();
    function inputvalue(e){
     
      const {name,value}=e.target;
      setsign(values=>({...values,[name]:value}))
    }
  
  
    const goWithReg=()=>{
      nav("/adminlogin")
    }
  
  
  
    const FromCheck=async(e)=>{
      e.preventDefault();
      setloader(true)
      // let api=`${BaseUrl}/login`;
      // try {
      //   let resp=await axios.post(api,sign);
      //   console.log(resp)
      //   toast.success("login is Successfully !!")
        
      //   localStorage.setItem("token",resp.data.token)
      //   setloader(true)
      //   nav("/dashboard")
      // } catch (error) {
      //   toast.error(error.response.data.msg)
      //   console.log("error")
      //   setloader(true)
      // }
    }
  
  
    const forgetpassword=async()=>{

        toast.error("This page have working")
      // let api=`${BaseUrl}/Registration`;
      // try {
      //   let response =await axios.post(api,sign)
      //   console.log(response)
      // } catch (error) {
      //   console.log("error")
      // }
    }
  
  
    const submitFrom=()=>{
      console.log(sign)
    }
    return (
      <>
       {
          (loader)?
           <div className="loader-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
        :<div className="conatiner_adminsign">
          <div className="form">
              <h1>Registration </h1>
              <form onSubmit={FromCheck} >

              <div className="email">
                      <label htmlFor="">Enter Email Id</label>
                      <input type="text" name='account'  placeholder="abc12@gmail.com " onChange={inputvalue} />
                  </div>

                  <div className="email">
                      <label htmlFor="">Enter Email Id</label>
                      <input type="text" name='account'  placeholder="abc12@gmail.com " onChange={inputvalue} />
                  </div>
                  <div className="email">
                      <label htmlFor="">Enter Email Id</label>
                      <input type="text" name='account'  placeholder="abc12@gmail.com " onChange={inputvalue} />
                  </div>
                 
                  <div className="password">
                      <label htmlFor="">Enter Password</label>
                      <input type="password" name='password'  placeholder="******" onChange={inputvalue} />
                  </div>
  
                  <div className="login_option">
                    <div className="login_checkbox">
                     <div className="checkbox">
                     <input type="checkbox"  required/>
                     </div>
                      <p>Remember it</p>
                    </div>
                    <div className="forget" onClick={forgetpassword}>
                      <p>Forget your password? </p>
                    </div>
                  </div>
                 
                  <div className="button">
                  <button type="submit" onClick={submitFrom}> Sign in</button>
                  <p>You have an account? <span onClick={goWithReg}>Login Page</span></p>
                  </div>
              </form>
          </div>
      </div>
       }
      <Toaster/>
      </>
    )
  }

import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import '../css/mainNavbar.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Url from '../cofi/BaseUrl';
import axios from 'axios';
export default function NavbarMain() {
  let[data,setData]=useState([]);
  const Loading=async()=>{
    let api =`${Url}/custmor/options`;
    try {
      const response =await axios.get(api);
      console.log(response.data);
      setData(response.data)
    } catch (error) {
      console.log("error");
    }
  }
  useEffect(()=>{Loading()},[])
  return (
    <>
    <Navbar expand="lg" className="bg-dark navbar-dark py-1">
      <Container fluid>

        {/* ✅ LOGO (LEFT) */}
        <Navbar.Brand href="#" className="fw-bold text-light d-flex align-center" id='navbarheader'>
          <img
            src="./logo.png" // Replace with your logo URL
            alt="Logo"
           


            className="d-inline-block align-top me-2 "
            id='imglogo'
          />
          <h1 id='logoWrite'>Bipin <span>Store</span></h1>
        </Navbar.Brand>

        {/* ✅ TOGGLE BUTTON FOR MOBILE VIEW */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll" className="justify-content-between">

          {/* ✅ SEARCH BAR (CENTER, ADJUSTS IN MOBILE VIEW) */}
          <Form className="d-flex mx-auto search-bar">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='btnSearch'>Search</Button>
          </Form>

          {/* ✅ NAVIGATION LINKS (RIGHT) */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/LikeCart" className="text-light"><p id='iconsbtn2'><FaHeart/><span>0</span></p></Nav.Link>
            <Nav.Link as={Link} to="/addtoCart" className="text-light"><p id="iconsbtns">< IoCartSharp/><span>0</span></p></Nav.Link>
            <Nav.Link as={Link} to="/adminlogin" className="text-light"><p id='iconsbtn3'><RiAdminFill/></p></Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-light"><p id='iconsbtn3'>< IoMdLogOut/></p></Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="subNavbar">
      <div className="options">
       {
        data.map((e,index)=>{
          return(
            <p key={index}> {e.catgury}</p>
          )
        })
       }
      </div>
    </div>
    </>
  )
}

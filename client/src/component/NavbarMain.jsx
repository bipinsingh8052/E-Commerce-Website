import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import '../css/mainNavbar.css'
export default function NavbarMain() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark py-3">
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
            <Nav.Link href="#home" className="text-light"><FaHeart/></Nav.Link>
            <Nav.Link href="#about" className="text-light"><IoCartSharp/></Nav.Link>
            <Nav.Link href="#about" className="text-light"><IoCartSharp/></Nav.Link>
            <Nav.Link href="#about" className="text-light"> admin<RiAdminFill/></Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

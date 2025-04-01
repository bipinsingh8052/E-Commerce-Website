import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/adminNavbar.css'
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
export default function AdminHeader() {
  let nav=useNavigate();
  const Logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('AdminId');
    localStorage.removeItem('name');
    nav("/adminlogin")
  }
  
  
  return (
    <>
     <Navbar expand="lg" bg="dark" data-bs-theme="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand>
          <img src='./logo.png' id="Logo" alt="Logo" width="50" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex g-5">
            <Nav.Link as={Link} to="/admindas/addProduct" className="nav-item">Add product</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item">Manage product</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item">Custmore Order</Nav.Link>
             <Button variant="danger " onClick={Logout}>  Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="SubHeading">
      <div className="sub_para">
        Welcome to Admin Dashboard : <span>Bipin Singh</span>
      </div>
    </div>
    </>
  )
}

// Footer.jsx

import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import '../css/footer.css'
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-3">
      <Container>
        <Row>
          <Col md={3} sm={6} xs={12}>
            <h5>Bipin store</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>Track Order</li>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li>Men</li>
              <li>Women</li>
              <li>Electronics</li>
              <li>Home & Kitchen</li>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex gap-3">
              <li><FaFacebookF /></li>
              <li><FaInstagram/></li>
              <li>< FaTwitter/></li>
              <li><IoLogoYoutube/></li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} ShopNow. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

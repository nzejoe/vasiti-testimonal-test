import React from "react";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const FooterMain = () => {
  return (
    <Container className="footer-main">
      <Row xs={2} md={5} className="footer-main-inner">
        <Col className="company">
          <h5 className="mb-3">Company</h5>
          <ul className="footer-links">
            <li>
              <NavLink href="#">About Us</NavLink>
            </li>
            <li>
              <NavLink href="#">Term of Use</NavLink>
            </li>
            <li>
              <NavLink href="#">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink href="#">Press &amp; Media</NavLink>
            </li>
          </ul>
        </Col>
        <Col className="company">
          <h5 className="mb-3">Products</h5>
          <ul className="footer-links">
            <li>
              <NavLink href="#">Marketplace</NavLink>
            </li>
            <li>
              <NavLink href="#">Magazine</NavLink>
            </li>
            <li>
              <NavLink href="#">Seller</NavLink>
            </li>
            <li>
              <NavLink href="#">Wholesale</NavLink>
            </li>
            <li>
              <NavLink href="#">Services</NavLink>
            </li>
          </ul>
        </Col>
        <Col className="company">
          <h5 className="mb-3">Career</h5>
          <ul className="footer-links">
            <li>
              <NavLink href="#">Become a Campus Rep</NavLink>
            </li>
            <li>
              <NavLink href="#">Become a Vasiti Influencer</NavLink>
            </li>
            <li>
              <NavLink href="#">Become a Campus writer</NavLink>
            </li>
            <li>
              <NavLink href="#">Become an Affiliate</NavLink>
            </li>
          </ul>
        </Col>
        <Col className="company">
          <h5 className="mb-3">Get in touch</h5>
          <ul className="footer-links">
            <li>
              <NavLink href="#">Contact us</NavLink>
            </li>
            <li>
              <NavLink href="#">Partner with us</NavLink>
            </li>
            <li>
              <NavLink href="#">Advertise with us</NavLink>
            </li>
            <li>
              <NavLink href="#">Help/FAQs</NavLink>
            </li>
          </ul>
        </Col>
        <Col>
          <h5 className="mb-3">Join our community</h5>
          <div className="social-icons mb-5 d-flex">
            <div className="icon-container me-2">
              <FaFacebookF />
            </div>
            <div className="icon-container me-2">
              <FaInstagram />
            </div>
            <div className="icon-container me-2">
              <FaTwitter />
            </div>
            <div className="icon-container me-2">
              <FaLinkedinIn />
            </div>
          </div>
          <p>Email Newsletter</p>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterMain;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
              <button>About Us</button>
            </li>
            <li>
              <button>Term of Use</button>
            </li>
            <li>
              <button>Privacy Policy</button>
            </li>
            <li>
              <button>Press &amp; Media</button>
            </li>
          </ul>
        </Col>
        <Col className="company">
          <h5 className="mb-3">Products</h5>
          <ul className="footer-links">
            <li>
              <button>Marketplace</button>
            </li>
            <li>
              <button>Magazine</button>
            </li>
            <li>
              <button>Seller</button>
            </li>
            <li>
              <button>Wholesale</button>
            </li>
            <li>
              <button>Services</button>
            </li>
          </ul>
        </Col>
        <Col className="company">
          <h5 className="mb-3">Career</h5>
          <ul className="footer-links">
            <li>
              <button>Become a Campus Rep</button>
            </li>
            <li>
              <button>Become a Vasiti Influencer</button>
            </li>
            <li>
              <button>Become a Campus writer</button>
            </li>
            <li>
              <button>Become an Affiliate</button>
            </li>
          </ul>
        </Col>
        <Col className="company">
          <h5 className="mb-3">Get in touch</h5>
          <ul className="footer-links">
            <li>
              <button>Contact us</button>
            </li>
            <li>
              <button>Partner with us</button>
            </li>
            <li>
              <button>Advertise with us</button>
            </li>
            <li>
              <button>Help/FAQs</button>
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

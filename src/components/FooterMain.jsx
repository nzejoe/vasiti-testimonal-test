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
              <a href>About Us</a>
            </li>
            <li>
              <a href>Term of Use</a>
            </li>
            <li>
              <a href>Privacy Policy</a>
            </li>
            <li>
              <a href>Press &amp; Media</a>
            </li>
          </ul>
        </Col>
        <Col className="company">
          <h5 className="mb-3">Products</h5>
          <ul className="footer-links">
            <li>
              <a href>Marketplace</a>
            </li>
            <li>
              <a href>Magazine</a>
            </li>
            <li>
              <a href>Seller</a>
            </li>
            <li>
              <a href>Wholesale</a>
            </li>
            <li>
              <a href>Services</a>
            </li>
          </ul>
        </Col>
        <Col className="company">
          <h5 className="mb-3">Career</h5>
          <ul className="footer-links">
            <li>
              <a href>Become a Campus Rep</a>
            </li>
            <li>
              <a href>Become a Vasiti Influencer</a>
            </li>
            <li>
              <a href>Become a Campus writer</a>
            </li>
            <li>
              <a href>Become an Affiliate</a>
            </li>
          </ul>
        </Col>
        <Col className="company">
          <h5 className="mb-3">Get in touch</h5>
          <ul className="footer-links">
            <li>
              <a href>Contact us</a>
            </li>
            <li>
              <a href>Partner with us</a>
            </li>
            <li>
              <a href>Advertise with us</a>
            </li>
            <li>
              <a href>Help/FAQs</a>
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

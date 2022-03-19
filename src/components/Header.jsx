import React from 'react'
import { Container, Image } from 'react-bootstrap'

const Header = () => {
  return (
    <Container className="hero">
      <div className="hero-content d-md-flex">
        <div className="hero-info d-flex flex-column justify-content-center">
          <h1 className="hero-title">
            Amazing
            <br />
            Experiences from Our Wonderful Customers
          </h1>
          <p className="hero-text">
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </p>
        </div>
        <div className="hero-image position-relative">
          <div className="eclipse position-absolute"></div>
          <div className="image-container position-absolute">
            <Image src="/images/Testimonial image 1.png" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header
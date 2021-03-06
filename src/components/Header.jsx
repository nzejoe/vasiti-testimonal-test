import React from 'react'
import { Container, Image } from 'react-bootstrap'

const Header = () => {
  return (
    <Container className="hero">
      <div className="hero-content d-md-flex">
        <div className="hero-info d-flex flex-column justify-content-center">
          <h1 className="hero-title mb-3">
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
          <div className="image-container position-relative">
            <Image src="/images/Testimonial image 1.png" fluid/>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header
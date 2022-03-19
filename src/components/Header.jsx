import React from 'react'
import { Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Container>
      <div className="hero">
        <div className="hero-info">
          <h1 className="hero-header">
            Amazing Experiences from Our Wonderful Customers
          </h1>
          <p>
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Header
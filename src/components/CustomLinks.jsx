import React from 'react'
import { Container, Nav} from 'react-bootstrap'

const CustomLinks = () => {
  return (
    <Container expand="md" className="custom-links d-none d-lg-block">
      <Nav className="justify-content-around">
        <Nav.Item>
          <Nav.Link>market place</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>wholesale center</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>seller center</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>internship</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>events</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default CustomLinks
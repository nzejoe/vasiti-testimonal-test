import React from 'react'
import { Container, Nav} from 'react-bootstrap'

const CustomLinks = () => {
  return (
    <div className="custom-links">
      <Container expand="md" className="custom-links-inner d-none d-lg-block">
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
    </div>
  );
}

export default CustomLinks
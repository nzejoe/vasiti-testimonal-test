import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <>
      <Navbar bg="white" expand="sm">
        <Container>
          <Navbar.Brand href="#">
            <Image src="/images/Vasiti-Logo-black 1.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              <Nav.Link href="#">about us</Nav.Link>
              <Nav.Link href="#">stories</Nav.Link>
              <Nav.Link href="#">contact</Nav.Link>
              <Nav.Link href="#">log in</Nav.Link>
              <Nav.Link href="#" className="sign-up-btn text-white">sign up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;

import React from "react";
import {
  Container,
  Form,
  FormControl,
  Button,
  InputGroup,
  Image,
} from "react-bootstrap";

const SubscribSection = () => {
  return (
    <Container className="subscribe-section d-md-flex justify-content-around">
      <div className="subscribe-info">
        <div className="subscribe-header">
          <h1>
            Be a member
            <br /> of our community 🎉
          </h1>
        </div>
        <div className="subscribe-text">
          <p>
            We’d make sure you’re always first to know what’s happening on
            Vasiti—thus, the world.
          </p>
        </div>
        <Form className="d-flex mt-4">
          <InputGroup>
            <FormControl
              type="search"
              placeholder="enter your email address"
              className=""
              aria-label="Search"
            />
            <InputGroup.Text className="bg-white">
              <Button className="border-0 bg-white text-upper">
                subscribe
              </Button>
            </InputGroup.Text>
          </InputGroup>
        </Form>
      </div>
      <div className="subscribe-banner mt-5 d-flex justify-content-center mb-0">
        <Image src="/images/subscribe-banner 1.png" />
      </div>
    </Container>
  );
};

export default SubscribSection;

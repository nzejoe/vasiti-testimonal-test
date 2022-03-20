import React, { useState, useRef } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { MdOutlineAttachment, MdClear } from "react-icons/md";

const ShareStory = ({ isEditing, handleEditing, addStoryHandler }) => {
  const [selectedIdentifier, setSelectedIdentifier] = useState("");
  const [alreadyReviewed, setAlreadyReviewed] = useState(false);
  const [image, setImage] = useState("");
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const textRef = useRef(null);
  const locationRef = useRef(null);
  const imageRef = useRef(null);

  const handleClose = () => {
    handleEditing(false);
  };

  const handleIdentifier = (e) => {
    const selected = e.target;
    if (selected.checked) setSelectedIdentifier(selected.id);
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleClearImage = (e) => {
    setImage("");
    // reset file input
    if (imageRef.current) imageRef.current.value = null;
  };

  const handleSubmit = () => {
    const firstName = firstNameRef.current && firstNameRef.current.value;
    const lastName = lastNameRef.current && lastNameRef.current.value;
    const location = locationRef.current && locationRef.current.value;
    const text = textRef.current && textRef.current.value;
    const name = `${firstName} ${lastName}`;
    const data = {
      badge: selectedIdentifier,
      image,
      name,
      text,
      location,
    };
    addStoryHandler(data);
    setAlreadyReviewed(true);
  };

  return (
    <>
      {!alreadyReviewed ? (
        <Modal
          show={isEditing}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="share-story"
        >
          <Modal.Header closeButton>
            <Modal.Title>Share your amazing story!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Text className="d-block mb-2">
                  Upload your Picture
                </Form.Text>
                <span className="icon-container float-end mt-2 me-3">
                  {image ? (
                    <MdClear onClick={handleClearImage} className="clear-btn" />
                  ) : (
                    <MdOutlineAttachment className="attachment-icon" />
                  )}
                </span>
                <Form.Label className="custom-input d-block w-100 ">
                  <div className="file-label">
                    {image ? image.name : "Choose Image"}
                  </div>
                </Form.Label>
                <Form.Control
                  type="file"
                  ref={imageRef}
                  hidden
                  onChange={handleFileChange}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" ref={firstNameRef} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" ref={lastNameRef} />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Share your story</Form.Label>
                <textarea
                  className="form-control"
                  rows={3}
                  ref={textRef}
                ></textarea>
              </Form.Group>
              <Form.Group
                className="mb-3 d-flex justify-content-between"
                controlId="formBasicCheckbox"
              >
                <Form.Label className="check-label">
                  What did you interact with Vasiti as?
                </Form.Label>
                <div className="d-flex">
                  <Form.Check
                    inline
                    label="Customer"
                    name="identifier"
                    type="radio"
                    id="customer"
                    onChange={handleIdentifier}
                  />
                  <Form.Check
                    inline
                    label="Vendor"
                    name="identifier"
                    type="radio"
                    id="vendor"
                    onChange={handleIdentifier}
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="location-label">
                  City or Higher Institution (for Students)
                </Form.Label>
                <Form.Control type="text" ref={locationRef} />
              </Form.Group>
              <Form.Group>
                <Button
                  type="button"
                  className="btn-lg float-end submit-btn"
                  onClick={handleSubmit}
                >
                  Share your story!
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      ) : (
        <Modal
          show={isEditing && alreadyReviewed}
          onHide={handleClose}
          className="already-shared"
        >
          <Modal.Body className="p-5 text-center">
            <div className="hurray-icon mb-4">🎉</div>
            <h1 className="px-3 mb-4">Thank you for sharing your story!</h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="button-container mb-4">
              <Button variant size="lg close-btn" onClick={handleClose}>
                close
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default ShareStory;

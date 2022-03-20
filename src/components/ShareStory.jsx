import React from 'react'
import {Modal, Button, Form, Row, Col } from 'react-bootstrap'

const ShareStory = ({ isEditing, handleEditing }) => {

  const handleClose = () => {
      handleEditing(false);
  };


  return (
    <>
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
            <Form.Group className="mb-3">
              <Form.Text className="d-block mb-2">
                Upload your Picture
              </Form.Text>
              <Form.Label className="custom-input d-block w-100">
                Choose Image
              </Form.Label>
              <Form.Control type="file" placeholder="Enter email" hidden />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Share your story</Form.Label>
              <textarea className="form-control" rows={3}></textarea>
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex justify-content-between"
              controlId="formBasicCheckbox"
            >
              <Form.Label className="check-label">
                What did you interact with Vasiti as?
              </Form.Label>
              <div className='d-flex'>
                <Form.Check
                  inline
                  label="Customer"
                  name="identifier"
                  type="radio"
                  id="customer"
                />
                <Form.Check
                  inline
                  label="Vendor"
                  name="identifier"
                  type="radio"
                  id="vendor"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="location-label">
                City or Higher Institution (for Students)
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Button className="btn-lg submit-btn" onClick={handleClose}>
                Share your story!
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}


export default ShareStory
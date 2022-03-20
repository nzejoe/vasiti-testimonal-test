import React from 'react'
import {Modal, Button, Form, Row, Col} from 'react-bootstrap'

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
            <Form.Group className="mb-3" controlId="formBasicEmail">
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
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ShareStory
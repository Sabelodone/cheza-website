import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import './Contact.css'; // Ensure this matches the actual file name


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      setResponseMessage('There was an error submitting the form.');
    }
  };



  return (
    <Container id="contact">
      <h2>Contact</h2>
      <hr />
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <Button className="custom-button" onClick={() => setShowModal(true)}>
            Open Contact Form
          </Button>
        </Col>
      </Row>

      {/* Modal Component */}
      <Modal show={showModal} onHide={() => setShowModal(false)} className="bounceIn">
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
            <Button className="custom-button" type="submit">
              Submit
            </Button>
            {responseMessage && <p>{responseMessage}</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="custom-button" variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Contact;

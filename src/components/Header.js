import React, { useState, useEffect } from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Header = () => {
  

  const [show, setShow] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false); // Close the drawer after navigating
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/bookings', formData)
      .then(response => {
        alert('Booking request sent successfully');
        handleClose();
      })
      .catch(error => {
        alert('Failed to send booking request');
      });
  };

  return (
    <>
      <header className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 bg-white rounded fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src="/logo.jpg" alt="Logo" className="navbar-logo" />
          </a>
          {!drawerOpen && (
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleDrawer}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          )}
          <div className={`collapse navbar-collapse ${drawerOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto d-none d-lg-flex">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#packages">Packages</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item">
                <Button className="btn btn-primary" onClick={handleShow}>Book</Button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Side Drawer */}
      <nav className={`side-drawer ${drawerOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
          <li><a href="#packages" onClick={handleLinkClick}>Packages</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          <li>
            <Button className="btn btn-primary" onClick={() => { toggleDrawer(); handleShow(); }}>Book</Button>
          </li>
        </ul>
      </nav>

      {/* Modal Component */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book an Appointment</Modal.Title>
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
                required
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
                required
              />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
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
                required
              />
            </Form.Group>
            <Button className="custom-button" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="custom-button" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;

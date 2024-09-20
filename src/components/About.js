import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        {/* Hero Image or Header Content can be added here if needed */}
      </div>

      <Container className="py-5">
        <Row className="mb-4">
          <Col md={6} className="about-info">
            <h2>About Us</h2>
            <p>
              At Travel Bliss, we are dedicated to providing you with the best travel experiences. Our team of travel experts curates exceptional itineraries to ensure you have a memorable journey. Whether you're looking for a relaxing beach vacation or an adventurous mountain trek, we have something for everyone.
            </p>
            <p>
              Our mission is to make travel easy and enjoyable for you. From booking flights and accommodations to arranging guided tours, we handle all the details so you can focus on having a great time. Explore our range of services and let us help you plan your next adventure.
            </p>
           
          </Col>
          <Col md={6} className="about-image">
            <img
              src={`${process.env.PUBLIC_URL}/pexels-photo-460740.jpeg`}
              alt="Travel Experiences"
              className="responsive-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

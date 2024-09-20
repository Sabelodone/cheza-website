// Services.js
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Services.css';

const servicesData = [
  {
    image: 'corparate.jpg',
    title: 'Corporate Travel',
    description: 'Our Corporate Travel service ensures seamless travel management for your business. We offer tailored solutions to meet your company’s specific needs, including booking flights, accommodation, and ground transportation. Our expert team manages everything, ensuring that your travel experience is efficient, cost-effective, and hassle-free.',
  },
  
  {
    image: 'Leisure.jpg',
    title: 'Leisure',
    description: 'Experience the ultimate in luxury and relaxation with our Leisure Travel service. Whether you’re planning a family vacation, a romantic getaway, or an adventure trip, we provide personalized travel planning to make your dream vacation a reality. From booking exclusive resorts to curating unique experiences, we handle every detail with care.',
  },
  {
    image: 'CONFRENCING.jpg',
    title: 'Conferencing',
    description:  'Our Conferencing service is designed to simplify the planning and execution of your business meetings and conferences. We take care of everything from venue selection to logistics, ensuring a smooth and successful event. Whether it’s a small meeting or a large conference, our team will manage all aspects to meet your business objectives.',
  },
  {
    image: 'assistance.jpg',
    title: 'After-Hours Assistance',
    description: 'We understand that travel can be unpredictable. That’s why our After-Hours Assistance service provides round-the-clock support for any travel emergencies or last-minute changes. Our dedicated team is available 24/7 to assist you with any issues, ensuring that you’re never left stranded or without help when you need it most.',
  },
  
  {
    image: 'montly.jpg',
    title: 'Monthly Travel Spend Report',
    description: 'Keep track of your company’s travel expenses with our Monthly Travel Spend Report service. We provide detailed reports that give you insights into your travel spending, helping you manage budgets and identify cost-saving opportunities. Our reports are customized to meet your specific needs, providing transparency and control over your travel expenses.',
  },
  {
    image: 'affiliation.jpg',
    title: 'Affiliated Group',
    description: 'As part of our Affiliated Group service, we offer exclusive access to a network of trusted partners and suppliers. This allows us to provide you with the best rates and services in the industry. Whether you need special arrangements or unique travel experiences, our affiliations enable us to offer a wide range of options tailored to your needs.',
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const handleReadMore = (index) => {
    setActiveService(index === activeService ? null : index);
  };


  return (
    <Container className="services-container my-5">
      <Row>
        {servicesData.map((service, index) => (
          <Col md={4} className="my-3" key={index}>
            <div className="service-card">
              <img src={service.image} alt={service.title} className="service-img" />
              <h3 className="service-title">{service.title}</h3>
              <Button
                variant="light"
                className="read-more-btn"
                onClick={() => handleReadMore(index)}
              >
                Read More
              </Button>
              {activeService === index && (
                <p className="service-description">{service.description}</p>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;


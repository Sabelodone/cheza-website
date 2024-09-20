import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Packages.css';

const packages = [
  {
    name: "Dikhololo",
    dates: "11-15 Nov 2024",
    details: "8 sleeper (6 Adults and 2 kids)",
    accommodation: "3 bedrooms, 4 nights",
    price: "R5400",
    images: [
      'download (1).jpg', 
      'download (2).jpg', 
      'download.jpg'
    ]
  },
  {
    name: "Ngwenya Lodge",
    dates: "06-09 Dec 2024",
    details: "8 sleeper (6 Adults and 2 Kids)",
    accommodation: "3 bedrooms, 3 nights",
    price: "R4800",
    images: [
      'ngwenya1.jpg', 
      'ngwenya2.jpg', 
      'ngwenya3.jpg'
    ]
  },
  {
    name: "Mount Amanzi",
    dates: "27-30 Sep",
    details: "5 Adults",
    accommodation: "5 sleeper",
    price: "R4600",
    images: [
      'mount1.jpg', 
      'mount2.jpg', 
      'mount3.jpeg'
    ]
  }
];

const Packages = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Container className="my-5">
      <h2 className="packages-heading">Packages</h2>
      <Row className="justify-content-center">
        {packages.map((pkg, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
            <Card className={`package-card ${hoveredIndex === index ? 'hovered' : ''}`}>
              <Card.Img
                variant="top"
                src={pkg.images[0]}
                className="package-image"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
              <Card.Body>
                <Card.Title>{pkg.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{pkg.dates}</Card.Subtitle>
                <Card.Text>
                  <div className="package-details">{pkg.details}</div>
                  <div className="package-accommodation">{pkg.accommodation}</div>
                  <div className="package-price">{pkg.price}</div>
                </Card.Text>
                <div className="package-images">
                  {pkg.images.slice(1).map((image, idx) => (
                    <img
                      src={image}
                      alt={`Package ${index + 1} - ${idx + 2}`}
                      key={idx}
                      className="img-fluid package-thumbnail"
                    />
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Packages;

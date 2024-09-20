import React, { useEffect } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './LandingPage.css';


const LandingPage = () => {


  return (
    <>
      <div id="home" className="landing-page">
        <div className="overlay"></div>
        <Container className="landing-text text-center my-5 py-5">
          <h1 className="landing-title">Welcome to Cheza</h1>
          <p className="landing-content">A Travel Management Company.</p>
        </Container>
      </div>

      {/* Carousel for Sponsor Icons */}
      <Container className="sponsor-carousel my-5">
        <Carousel interval={2000} pause={false} controls={false} indicators={false}>
          {[
            'avis.png',
            'british.png',
            'city lodge.png',
            'delta.png',
            'europcar.jpg',
            'flysafair.jpg',
            'hilton.png',
            'qatar.png',
            'road.png',
            'mango.png'
          ].map((src, index) => (
            <Carousel.Item key={index}>
              <img src={src} alt={`Sponsor ${index + 1}`} className="d-block w-100 sponsor-img" />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default LandingPage;

import React, { Suspense, lazy } from 'react';

const Header = lazy(() => import('./components/Header'));
const LandingPage = lazy(() => import('./components/LandingPage'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Packages = lazy(() => import('./components/Packages'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const BookingModal = lazy(() => import('./components/BookingModal'));

const App = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <main>
        <LandingPage />
        <About />
        <Services />
        <Packages />
        <Contact />
      </main>
      <Footer />
      <BookingModal />
    </Suspense>
  </div>
);

export default App;

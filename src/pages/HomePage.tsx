import React from 'react';
import Hero from '../components/home/Hero';
import BookingForm from '../components/home/BookingForm';
import Logos from '../components/home/Logos';
import HowItWorks from '../components/home/HowItWorks';
import FeaturedCars from '../components/home/FeaturedCars';
import AboutUs from '../components/home/AboutUs';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';

const HomePage = () => {
  return (
    <>
      <Hero />
      <BookingForm />
      <Logos />
      <FeaturedCars />
      <AboutUs />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default HomePage;

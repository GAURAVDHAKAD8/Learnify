import React from "react";
import Footer from "../../components/student/Footer.jsx";
import Hero from "../../components/student/Hero.jsx";
import Companies from "../../components/student/Companies.jsx";
import CoursesSection from "../../components/student/CourseSection.jsx";
import TestimonialsSection from "../../components/student/TestimonialSection.jsx";
import CallToAction from "../../components/student/CallToAction.jsx";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies />
      <CoursesSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;

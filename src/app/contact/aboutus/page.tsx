// Import React and other dependencies
'use client';
import React from 'react';
import HeaderSection from '../../_components/Header';
import Footer from '../../_components/Footer';
import Image from 'next/image';
import { FaArrowUp } from 'react-icons/fa';
// Import the custom CSS file
import '../styles/aboutUs.css';

const AboutUs = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <HeaderSection />
      <div className="about-container">
        {/* Profile Image Section */}
        <div className="profile-image">
          <Image
            src="/Profile.png"
            alt="Jasmine Sheikh"
            width={300}
            height={300}
            className="image"
          />
        </div>

        <h1 className="title">ABOUT ME</h1>

        <div className="content-container">
          <p className="text-lg">
            Im AbdulRehman Shaikh a 17-year-old full-stack developer with a passion for AI Metaverse and Web 3.0 technologies
            Currently Im a 9th-grade student under the Governor Sindh IT Initiative (GIAIC) exploring TypeScript Next.js Tailwind CSS and HTML
            I enjoy building websites and learning new technologies to improve my skills and contribute to future projects
          </p>

          <h2 className="subtitle">My Journey</h2>
          <p className="text-lg">
          "My web development journey began with mastering HTML, CSS, and TypeScript, progressing to dynamic websites with Next.js, all while integrating design and entrepreneurship."
          </p>

          <h2 className="subtitle">What Drives Me</h2>
          <p className="text-lg">
            Im passionate about creating impactful applications and Im excited by the potential of AI and the Metaverse in shaping the future of technology
          </p>

          <h2 className="subtitle">Looking Ahead</h2>
          <p className="text-lg">
            Im eager to collaborate on innovative projects that push technological boundaries especially in AI blockchain and web development
          </p>
        </div>

        {/* Go to Top Button */}
        <div className="top-button-container">
          <button onClick={scrollToTop} className="top-button">
            <FaArrowUp className="arrow-icon" /> Go to Top
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

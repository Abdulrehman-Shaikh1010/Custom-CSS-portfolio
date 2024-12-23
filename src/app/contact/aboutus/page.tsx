'use client';
import React from 'react';
import HeaderSection from '../../_components/Header';
import Footer from '../../_components/Footer';
import Image from 'next/image';
import { FaArrowUp } from 'react-icons/fa';
import '../styles/aboutUs.css';

const AboutUs = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <HeaderSection />
      <div className="about-container">
        <div className="profile-image">
          <Image
            src="/Profile.png"
            alt="AbdulRehman Shaikh"
            width={300}
            height={300}
            className="image"
          />
        </div>

        <h1 className="title">ABOUT ME</h1>

        <div className="content-container">
          <p className="text-lg">
            I&apos;m AbdulRehman Shaikh, a 17-year-old full-stack developer with a passion for AI, the Metaverse, and Web 3.0 technologies.
            Currently, I&apos;m a 9th-grade student under the Governor Sindh IT Initiative (GIAIC), exploring TypeScript, Next.js, Tailwind CSS, and HTML.
            I enjoy building websites and learning new technologies to improve my skills and contribute to future projects.
          </p>

          <h2 className="subtitle">My Journey</h2>
          <p className="text-lg">
            &quot;My web development journey began with mastering HTML, CSS, and TypeScript, progressing to dynamic websites with Next.js, all while integrating design and entrepreneurship.&quot;
          </p>

          <h2 className="subtitle">What Drives Me</h2>
          <p className="text-lg">
            I&apos;m passionate about creating impactful applications, and I&apos;m excited by the potential of AI and the Metaverse in shaping the future of technology.
          </p>

          <h2 className="subtitle">Looking Ahead</h2>
          <p className="text-lg">
            I&apos;m eager to collaborate on innovative projects that push technological boundaries, especially in AI, blockchain, and web development.
          </p>
        </div>

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

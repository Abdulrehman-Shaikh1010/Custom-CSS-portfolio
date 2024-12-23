import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa6';
import { MdMarkEmailUnread } from 'react-icons/md';
import { FaClock } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import HeaderSection from '../../_components/Header';
import Footer from '../../_components/Footer';
import '../styles/contactUs.css';


const ContactUs = () => {
  return (
    <>
      <HeaderSection />
      <div className="contact-container">
        <h1 className="contact-title">CONTACT US</h1>
        <div className="contact-grid">
          {/* Contact Form */}
          <form className="form-section">
            <h2 className="form-title">Let&apos;s Work Together</h2>
            <div className="message-mb">
              <label htmlFor="name">Your Name (required)</label>
              <input
                type="text"
                id="name"
                className="input-field"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="message-mb">
              <label htmlFor="email">Your Email (required)</label>
              <input
                type="email"
                id="email"
                className="input-field"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="message-mb">
              <label htmlFor="number">Your Phone Number</label>
              <input
                type="text"
                id="number"
                className="input-field"
                placeholder="Enter Your Phone Number"
                required
              />
            </div>
            <div className="message-mb">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="textarea-field"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="info-section">
            <h2 className="info-title">CONTACT INFORMATION</h2>
            <p className="info-text">
              Thank you for visiting my portfolio! If you would like to discuss a project collaborate
              or have any inquiries feel free to reach out I look forward to hearing from you!
            </p>

            <div>
              <div className="info-item">
                <IoHome className="contact-icon" />
                <span>Latifabad no 9 Hyderabad</span>
              </div>
              <div className="info-item">
                <FaPhoneVolume className="contact-icon" />
                <span>03195904120</span>
              </div>
              <div className="info-item">
                <MdMarkEmailUnread className="contact-icon" />
                <span>abdulrehman.shaikh29042@gmail.com</span>
              </div>
              <div className="info-item">
                <FaClock className="contact-icon" />
                <span>Everyday 9:00 AM to 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

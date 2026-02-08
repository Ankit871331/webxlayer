import React from 'react';
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaGithub
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import logo from "../../assets/logo.png"; // ✅ add your logo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>
        {`
          .footer-container {
            background-color: #050505;
            color: #ffffff;
            padding: 80px 8% 40px;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          }

          .footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1.5fr;
            gap: 40px;
            margin-bottom: 60px;
          }

          .footer-logo {
            width: 140px;
            margin-bottom: 16px;
          }

          .footer-brand h2 {
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -1px;
            margin: 0 0 15px 0;
            background: linear-gradient(90deg, #fff, #888);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .footer-brand>a{
          cursor: pointer;
          }

          .footer-tagline {
            color: #8a8a8e;
            font-size: 15px;
            line-height: 1.6;
            max-width: 280px;
          }

          .footer-cta {
            margin-top: 18px;
            display: inline-block;
            padding: 12px 20px;
            background: #5d50e6;
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            border-radius: 8px;
            text-decoration: none;
            transition: opacity 0.3s ease;
          }

          .footer-cta:hover {
            opacity: 0.85;
          }

          .footer-heading {
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #444;
            margin-bottom: 25px;
          }

          .footer-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .footer-link {
            cursor: pointer;
            color: #8a8a8e;
            text-decoration: none;
            font-size: 14px;
            display: block;
            margin-bottom: 12px;
            transition: color 0.3s ease, transform 0.2s ease;
          }

          .footer-link:hover {
            color: #ffffff;
            transform: translateX(5px);
          }

          .contact-email {
            font-size: 20px;
            font-weight: 500;
            color: #ffffff;
            text-decoration: none;
            display: inline-block;
            margin-bottom: 10px;
            border-bottom: 1px solid #333;
            padding-bottom: 5px;
            transition: border-color 0.3s ease;
          }

          .contact-email:hover {
            border-color: #ffffff;
          }

          .social-container {
            display: flex;
            gap: 20px;
            margin-top: 25px;
          }

          .social-icon {
            color: #444;
            font-size: 18px;
            transition: color 0.3s ease;
            text-decoration: none;
          }

          .social-icon:hover {
            color: #fff;
          }

          .footer-bottom {
            border-top: 1px solid #1a1a1a;
            padding-top: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 13px;
            color: #444;
          }

          @media (max-width: 900px) {
            .footer-grid {
              grid-template-columns: 1fr 1fr;
            }
          }

          @media (max-width: 500px) {
            .footer-grid {
              grid-template-columns: 1fr;
            }
            .footer-bottom {
              flex-direction: column;
              gap: 15px;
              text-align: center;
            }
          }
        `}
      </style>

      <footer className="footer-container">
        <div className="footer-grid">

          {/* Brand Column */}
          <div className="footer-brand " >
            {/* ✅ LOGO ADDED */}
            <a onClick={()=>scrollToSection("home")}  >
            <img src={logo} alt="WebX Layer Logo" className="footer-logo" />
           

            <h2 className="webxlayer">WebX Layer</h2>
             </a>
            <p className="footer-tagline">
              Premium web experiences for modern brands. We build fast, scalable, and beautiful websites.
            </p>

            {/* ✅ CTA BUTTON */}
            <a
              href="https://wa.me/919015467191"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta"
            >
              Start Your Project →
            </a>

            {/* Social Icons */}
            <div className="social-container">
              {/* <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaXTwitter /></a> */}
              {/* <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a> */}
              <a href="https://www.instagram.com/webxlayer/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
              {/* <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a> */}
              {/* <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li><a className="footer-link">UI/UX Design</a></li>
              <li><a className="footer-link">Web Development</a></li>
              <li><a className="footer-link">E-commerce</a></li>
              <li><a className="footer-link">Maintenance</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-list">
              <li><a onClick={() => scrollToSection("projects")} className="footer-link">Our Work</a></li>
              <li><a onClick={() => scrollToSection("pricing")} className="footer-link">Pricing</a></li>
              <li><a className="footer-link" onClick={()=>scrollToSection("projects")} >Testimonials</a></li>
              <li><a className="footer-link" onClick={()=>scrollToSection("why-choose")}>Privacy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">Start a project</h4>
            <a href="mailto:webxlayer@gmail.com" className="contact-email">
              webxlayer@gmail.com
            </a>
            <p style={{ color: '#444', fontSize: '13px' }}>
              Based in Global Remote<br />
              Available for new projects
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} WebX Layer. All rights reserved.</p>
          <p>Built with precision by WebX Layer</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

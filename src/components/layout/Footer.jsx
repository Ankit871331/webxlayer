import React from 'react';
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaGithub
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


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

          .footer-brand h2 {
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -1px;
            margin: 0 0 15px 0;
            background: linear-gradient(90deg, #fff, #888);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .footer-tagline {
            color: #8a8a8e;
            font-size: 15px;
            line-height: 1.6;
            max-width: 280px;
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

      <footer className="footer-container" id=''>
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <h2 className="webxlayer">webX Layer</h2>
            <p className="footer-tagline">
              Premium web experiences for modern brands. We build fast, scalable, and beautiful websites.
            </p>


            {/* Footeer icons */}

            <div className="social-container">
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="X (Twitter)"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>

          </div>

          {/* Services Column */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list" >
              <li><a  className="footer-link">UI/UX Design</a></li>
              <li><a  className="footer-link">Web Development</a></li>
              <li><a  className="footer-link">E-commerce</a></li>
              <li><a  className="footer-link">Maintenance</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-list">
              <li><a onClick={() => scrollToSection("projects")}
                className="footer-link">Our Work</a></li>
              <li><a onClick={() => scrollToSection('prising')} className="footer-link">Pricing</a></li>
              <li><a onClick={() => scrollToSection('projects')} className="footer-link">Testimonials</a></li>
              <li><a onClick={() => scrollToSection('why-choose')} className="footer-link">Privacy</a></li>
            </ul>
          </div>

          {/* Contact Column */}
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
          <p>&copy; {currentYear} webXlayer. All rights reserved.</p>
          <p>Built with precision by webXlayer</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
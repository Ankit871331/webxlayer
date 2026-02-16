import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const openCalendly = () => {
    window.open("https://calendly.com/webxlayer/30min", "_blank");
  };

  return (
    <Nav>
      <LogoWrapper onClick={() => scrollToSection("home")}>
        <img src={logo} alt="WebXLayer logo" />
        <span>WebX Layer</span>
      </LogoWrapper>

      <Menu open={open}>
        <MenuItem onClick={() => scrollToSection("home")}>Home</MenuItem>
        <MenuItem onClick={() => scrollToSection("services")}>Services</MenuItem>
        <MenuItem onClick={() => scrollToSection("projects")}>Projects</MenuItem>
        <MenuItem onClick={() => scrollToSection("pricing")}>Pricing</MenuItem>

        <CTAButtonMobile onClick={openCalendly}>
          Free Website Audit
        </CTAButtonMobile>
      </Menu>

      <CTAButtonDesktop onClick={openCalendly}>
        Free Website Audit
      </CTAButtonDesktop>

      <Hamburger onClick={() => setOpen(!open)} open={open}>
        <span />
        <span />
        <span />
      </Hamburger>
    </Nav>
  );
};

export default Navbar;

/* ================= STYLES ================= */

const Nav = styled.nav`
  width: 100%;
  padding: 20px 8%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }

  span {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    right: 8%;
    background: #000;
    flex-direction: column;
    gap: 20px;
    padding: 24px;
    border: 1px solid #222;
    border-radius: 8px;
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

const MenuItem = styled.li`
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const CTAButtonDesktop = styled.button`
  background: #5D50E6;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CTAButtonMobile = styled.button`
  background: #5D50E6;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 26px;
  height: 20px;
  cursor: pointer;
  z-index: 1100;

  span {
    height: 2px;
    width: 100%;
    background: #fff;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  span:nth-child(1) {
    transform: ${({ open }) =>
      open ? "rotate(45deg) translateY(8px)" : "none"};
  }

  span:nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
  }

  span:nth-child(3) {
    transform: ${({ open }) =>
      open ? "rotate(-45deg) translateY(-8px)" : "none"};
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

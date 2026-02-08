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
    setOpen(false); // close mobile menu after click
  };


  const openWhatsApp = () => {
  window.open("https://wa.me/916394269895", "_blank");
};

  return (
    <Nav>
<LogoWrapper onClick={() => scrollToSection("home")}>
  <img src={logo} alt="WebXLayer logo" />
  <span className="webxlayer">WebX Layer</span>
</LogoWrapper>

      <Menu open={open}>
        <MenuItem onClick={() => scrollToSection("home")}>Home</MenuItem>
        <MenuItem onClick={() => scrollToSection("services")}>Services</MenuItem>
        <MenuItem onClick={() => scrollToSection("projects")}>Projects</MenuItem>
        <MenuItem onClick={openWhatsApp}>Contact</MenuItem>
        <MenuItem onClick={() => scrollToSection("prising")}>Prising</MenuItem>
      </Menu>
      <Hamburger onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>
    </Nav>
  );
};

export default Navbar;

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


const Nav = styled.nav`
  width: 100%;
  padding: 20px 8%;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
   position: fixed;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

`;

const Logo = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const Menu = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    right: 8%;
    background: #000;
    flex-direction: column;
    gap: 20px;
    padding: 24px;
    border: 1px solid #222;
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

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 22px;
    height: 2px;
    background: #fff;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

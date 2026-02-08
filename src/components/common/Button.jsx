import React from "react";
import styled from "styled-components";

const Button = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/919015467191", "_blank");
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
   // close mobile menu after click
  };

  return (
    <MainButtonDiv>
      <PrimaryButton onClick={openWhatsApp}>Get Free Consultation</PrimaryButton>
      <SecondaryButton onClick={() => scrollToSection("projects") }>View Our Work</SecondaryButton>
    </MainButtonDiv>
  );
};

export default Button;

/* ===== STYLES ===== */

const MainButtonDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  margin-top: 2%;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 14px;
  }
`;

const PrimaryButton = styled.button`
  padding: 14px 36px;
  font-size: 15px;
  font-weight: 600;
  background: #ffffff;
  color: #000000;
  border: 1px solid #ffffff;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #e5e5e5;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 280px;
    padding: 12px 20px;
    font-size: 14px;
  }
`;

const SecondaryButton = styled.button`
  padding: 14px 36px;
  font-size: 15px;
  font-weight: 600;
  background: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #ffffff;
    color: #000000;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 280px;
    padding: 12px 20px;
    font-size: 14px;
  }
`;

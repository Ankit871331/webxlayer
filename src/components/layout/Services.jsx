import React from "react";
import styled from "styled-components";

const services = [
  "One Medical",
  "Slack",
  "New York Times",
  "Zoom",
  "Walgreens",
  "Airbnb",
  "Asana",
  "Basic Dept",
  "Coinbase",
];

const LogoMarquee = () => {
  return (
    <MarqueeSection id="services">
      <Heading>Our Services</Heading>
      <MarqueeWrapper>
        {services.concat(services).map((service, index) => (
          <Logo key={index}>{service}</Logo>
        ))}
      </MarqueeWrapper>
    </MarqueeSection>
  );
};

export default LogoMarquee;

// Styled Components
const MarqueeSection = styled.section`
  background: #ffffff;
  padding: 60px 20px;
  overflow: hidden;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #111;
  margin-bottom: 40px;
`;

const MarqueeWrapper = styled.div`
  display: flex;
  width: max-content;
  margin: 0 auto;
  animation: scroll 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin: 0 40px;
  padding: 10px 20px;
  background: #f0f0f0;
  border-radius: 12px;
  color: #333;
  white-space: nowrap;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s, background 0.2s;

  &:hover {
    background: #e0e0e0;
    transform: scale(1.1);
  }
`;

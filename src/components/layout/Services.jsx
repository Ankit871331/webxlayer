import React from "react";
import styled from "styled-components";

const services = [
  "Website Design",
  "Frontend Development",
  "React & Next.js",
  "Business Websites",
  "Portfolio Websites",
  "Landing Pages",
  "UI/UX Design",
  "Website Redesign",
  "SEO Ready Websites",
];

const ServicesMarquee = () => {
  return (
    <MarqueeSection id="services">
      <Heading>Our Services</Heading>
      <SubHeading>What We Build at WebXLayer</SubHeading>

      <MarqueeWrapper>
        {services.concat(services).map((service, index) => (
          <ServiceCard key={index}>{service}</ServiceCard>
        ))}
      </MarqueeWrapper>
    </MarqueeSection>
  );
};

export default ServicesMarquee;

// Styled Components

const MarqueeSection = styled.section`
  background: #ffffff;
  padding: 80px 20px;
  overflow: hidden;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: #111;
  margin-bottom: 10px;
`;

const SubHeading = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 50px;
`;

const MarqueeWrapper = styled.div`
  display: flex;
  width: max-content;
  margin: 0 auto;
  animation: scroll 22s linear infinite;

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

const ServiceCard = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin: 0 28px;
  padding: 14px 26px;
  background: #f8f8f8;
  border-radius: 999px;
  color: #111;
  white-space: nowrap;
  border: 1px solid #e5e5e5;
  transition: all 0.25s ease;

  &:hover {
    background: #5d50e6;
    color: #fff;
    transform: translateY(-4px);
  }
`;

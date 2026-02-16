import React from "react";
import styled, { keyframes } from "styled-components";

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
      <SubHeading>
        At WebXLayer, we build websites that grow your business, improve user experience, and generate leads.
      </SubHeading>

      <MarqueeWrapper>
        {services.concat(services).map((service, index) => (
          <ServiceCard key={index}>{service}</ServiceCard>
        ))}
      </MarqueeWrapper>
    </MarqueeSection>
  );
};

export default ServicesMarquee;

// ===== Styled Components =====

const MarqueeSection = styled.section`
  background: #fefefe;
  padding: 100px 20px;
  overflow: hidden;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: clamp(36px, 5vw, 48px);
  font-weight: 900;
  color: #111;
  margin-bottom: 16px;
`;

const SubHeading = styled.p`
  font-size: clamp(16px, 2vw, 18px);
  color: #555;
  max-width: 720px;
  margin: 0 auto 60px auto;
  line-height: 1.6;
`;

const scroll = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
`;

const MarqueeWrapper = styled.div`
  display: flex;
  width: max-content;
  gap: 24px;
  animation: ${scroll} 35s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const ServiceCard = styled.div`
  font-weight: 600;
  font-size: 16px;
  padding: 14px 28px;
  background: #fff;
  border-radius: 50px;
  color: #111;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.08);
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background: #5d50e6;
    color: #fff;
    transform: translateY(-6px) scale(1.05);
    box-shadow: 0px 8px 20px rgba(93, 80, 230, 0.3);
    cursor: default;
  }
`;

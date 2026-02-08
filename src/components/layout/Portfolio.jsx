import React from "react";
import styled from "styled-components";

const projects = [
  {
    title: "Business Website for Local Brand",
    description:
      "A professional multi-page business website designed to build trust and generate customer enquiries.",
    focus: "Branding • Responsive Design • Lead Generation",
    link: "#",
  },
  {
    title: "High-Converting Landing Page",
    description:
      "A conversion-focused landing page built to promote services and capture leads effectively.",
    focus: "UI/UX • Call-to-Action • Performance",
    link: "#",
  },
  {
    title: "Professional Portfolio Website",
    description:
      "A clean and modern portfolio website tailored for freelancers and creators.",
    focus: "Personal Branding • Clean UI • Modern Layout",
    link: "#",
  },
  {
    title: "E-commerce Website Demo",
    description:
      "A demo online store showcasing products, pricing sections, and a smooth shopping experience.",
    focus: "Product UI • Layout • User Experience",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <PortfolioSection id="projects">
      <Heading>Our Work</Heading>
      <SubHeading>
        Websites we design to help businesses grow, convert, and stand out online.
      </SubHeading>

      <MarqueeWrapper>
        {[...projects, ...projects].map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDesc>{project.description}</ProjectDesc>
            <ProjectFocus>{project.focus}</ProjectFocus>

            <ProjectLink
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo →
            </ProjectLink>
          </ProjectCard>
        ))}
      </MarqueeWrapper>

      <Note>
        More custom projects available based on client requirements.
      </Note>
    </PortfolioSection>
  );
};

export default Portfolio;

// ---------------- Styled Components ----------------

const PortfolioSection = styled.section`
  padding: 90px 20px;
  background: #000;
  color: #fff;
  text-align: center;
  overflow: hidden;
`;

const Heading = styled.h2`
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 14px;
`;

const SubHeading = styled.p`
  font-size: 16px;
  margin-bottom: 50px;
  color: #b5b5b5;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const MarqueeWrapper = styled.div`
  display: flex;
  width: max-content;
  gap: 30px;
  animation: scroll 28s linear infinite;

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

const ProjectCard = styled.div`
  background: #000;
  color: #fff;
  padding: 28px;
  border-radius: 16px;
  width: 360px;
  border: 2px dotted #fff;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(255, 255, 255, 0.15);
    border-radius: 0px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const ProjectDesc = styled.p`
  font-size: 15px;
  color: #c0c0c0;
  margin-bottom: 14px;
  line-height: 1.5;
`;

const ProjectFocus = styled.p`
  font-size: 13px;
  color: #888;
  margin-bottom: 18px;
`;

const ProjectLink = styled.a`
  color: #5d50e6;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: #7a70ff;
  }
`;

const Note = styled.p`
  margin-top: 40px;
  font-size: 14px;
  color: #777;
`;

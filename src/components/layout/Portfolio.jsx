import React from "react";
import styled from "styled-components";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern personal portfolio built with React and styled-components.",
    link: "https://portfolio-ankit-orig.netlify.app/",
  },
  {
    title: "College Project: Library Management",
    description: "A complete library management system using Java and MySQL.",
    link: "#",
  },
  {
    title: "Practice Project: Todo App",
    description: "A fully functional Todo app with local storage and drag-drop features.",
    link: "#",
  },
  {
    title: "E-commerce Demo",
    description: "A demo e-commerce site with product listings and cart functionality.",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <PortfolioSection id="projects">
      <Heading>Our Work</Heading>
      <SubHeading>
        Real projects built with modern technologies and best practices.
      </SubHeading>

      <MarqueeWrapper>
        {[...projects, ...projects].map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDesc>{project.description}</ProjectDesc>
            <ProjectLink href={project.link}>
              View Project →
            </ProjectLink>
          </ProjectCard>
        ))}
      </MarqueeWrapper>
    </PortfolioSection>
  );
};

export default Portfolio;


const PortfolioSection = styled.section`
  padding: 60px 20px;
  background: black;
  color: white;
  text-align: center;
  overflow: hidden;
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const SubHeading = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
  color: #bbb;
`;

const MarqueeWrapper = styled.div`
  display: flex;
  width: max-content;
  gap: 24px;
  animation: scroll 25s linear infinite;

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
  background: black;
  color: white;
  padding: 24px;
  border-radius: 16px;
  width: 320px;
  border: 2px dotted white;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.15);
    border-radius: 0px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const ProjectDesc = styled.p`
  font-size: 16px;
  color: #aca7a7;
  margin-bottom: 16px;
`;

const ProjectLink = styled.a`
  color: #0077ff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #3399ff;
  }
`;

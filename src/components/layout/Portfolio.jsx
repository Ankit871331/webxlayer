import React from "react";
import styled from "styled-components";

const projects = [
  {
    title: "Business Website Concept",
    tag: "Design Showcase",
    description:
      "A multi-page website designed for a local service-based business to build trust and generate customer inquiries.",
    focus: "Responsive Design • Clear Service Pages • Contact Integration",
    link: "#",
  },
  {
    title: "High-Converting Landing Page",
    tag: "Design Showcase",
    description:
      "A focused landing page built to promote a single service with strong call-to-action and structured content layout.",
    focus: "Conversion Strategy • CTA Optimization • Fast Performance",
    link: "#",
  },
  {
    title: "Modern Portfolio Website",
    tag: "Design Showcase",
    description:
      "A clean and minimal portfolio website created for freelancers and creators to showcase their work professionally.",
    focus: "Personal Branding • Clean UI • Mobile Optimization",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <PortfolioSection id="projects">
      <Heading>Our Work</Heading>
      <SubHeading>
        Carefully crafted website concepts designed to demonstrate our design
        quality, structure, and performance approach.
      </SubHeading>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <Tag>{project.tag}</Tag>

            <ProjectTitle>{project.title}</ProjectTitle>

            <ProjectDesc>{project.description}</ProjectDesc>

            <ProjectFocus>{project.focus}</ProjectFocus>

            <ProjectLink
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Preview →
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      <Note>
        Custom websites are built based on your business goals and requirements.
      </Note>
    </PortfolioSection>
  );
};

export default Portfolio;

/* ================= STYLES ================= */

const PortfolioSection = styled.section`
  padding: 100px 8%;
  background: #000;
  color: #fff;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const SubHeading = styled.p`
  font-size: 16px;
  color: #b5b5b5;
  max-width: 650px;
  margin: 0 auto 60px auto;
  line-height: 1.6;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: #111;
  padding: 32px 28px;
  border-radius: 16px;
  border: 1px solid #1f1f1f;
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: #333;
  }
`;

const Tag = styled.span`
  display: inline-block;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 20px;
  background: #1a1a1a;
  color: #7a70ff;
  margin-bottom: 14px;
  font-weight: 500;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 14px;
`;

const ProjectDesc = styled.p`
  font-size: 15px;
  color: #c0c0c0;
  margin-bottom: 16px;
  line-height: 1.6;
`;

const ProjectFocus = styled.p`
  font-size: 13px;
  color: #888;
  margin-bottom: 20px;
`;

const ProjectLink = styled.a`
  display: inline-block;
  font-weight: 600;
  text-decoration: none;
  color: #5d50e6;
  transition: 0.3s;

  &:hover {
    color: #7a70ff;
  }
`;

const Note = styled.p`
  margin-top: 50px;
  font-size: 14px;
  color: #777;
`;





// import React from "react";
// import styled from "styled-components";

// const projects = [
//   {
//     title: "Business Website for Local Brand",
//     description:
//       "A professional multi-page business website designed to build trust and generate customer enquiries.",
//     focus: "Branding • Responsive Design • Lead Generation",
//     link: "#",
//   },
//   {
//     title: "High-Converting Landing Page",
//     description:
//       "A conversion-focused landing page built to promote services and capture leads effectively.",
//     focus: "UI/UX • Call-to-Action • Performance",
//     link: "#",
//   },
//   {
//     title: "Professional Portfolio Website",
//     description:
//       "A clean and modern portfolio website tailored for freelancers and creators.",
//     focus: "Personal Branding • Clean UI • Modern Layout",
//     link: "#",
//   },
//   {
//     title: "E-commerce Website Demo",
//     description:
//       "A demo online store showcasing products, pricing sections, and a smooth shopping experience.",
//     focus: "Product UI • Layout • User Experience",
//     link: "#",
//   },
// ];

// const Portfolio = () => {
//   return (
//     <PortfolioSection id="projects">
//       <Heading>Our Work</Heading>
//       <SubHeading>
//         Websites we design to help businesses grow, convert, and stand out online.
//       </SubHeading>

//       <MarqueeWrapper>
//         {[...projects, ...projects].map((project, index) => (
//           <ProjectCard key={index}>
//             <ProjectTitle>{project.title}</ProjectTitle>
//             <ProjectDesc>{project.description}</ProjectDesc>
//             <ProjectFocus>{project.focus}</ProjectFocus>

//             <ProjectLink
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               View Demo →
//             </ProjectLink>
//           </ProjectCard>
//         ))}
//       </MarqueeWrapper>

//       <Note>
//         More custom projects available based on client requirements.
//       </Note>
//     </PortfolioSection>
//   );
// };

// export default Portfolio;

// // ---------------- Styled Components ----------------

// const PortfolioSection = styled.section`
//   padding: 90px 20px;
//   background: #000;
//   color: #fff;
//   text-align: center;
//   overflow: hidden;
// `;

// const Heading = styled.h2`
//   font-size: 42px;
//   font-weight: 800;
//   margin-bottom: 14px;
// `;

// const SubHeading = styled.p`
//   font-size: 16px;
//   margin-bottom: 50px;
//   color: #b5b5b5;
//   max-width: 700px;
//   margin-left: auto;
//   margin-right: auto;
// `;

// const MarqueeWrapper = styled.div`
//   display: flex;
//   width: max-content;
//   gap: 30px;
//   animation: scroll 28s linear infinite;

//   &:hover {
//     animation-play-state: paused;
//   }

//   @keyframes scroll {
//     0% {
//       transform: translateX(0%);
//     }
//     100% {
//       transform: translateX(-50%);
//     }
//   }
// `;

// const ProjectCard = styled.div`
//   background: #000;
//   color: #fff;
//   padding: 28px;
//   border-radius: 16px;
//   width: 360px;
//   border: 2px dotted #fff;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-8px);
//     box-shadow: 0 12px 28px rgba(255, 255, 255, 0.15);
//     border-radius: 0px;
//   }
// `;

// const ProjectTitle = styled.h3`
//   font-size: 20px;
//   font-weight: 600;
//   margin-bottom: 12px;
// `;

// const ProjectDesc = styled.p`
//   font-size: 15px;
//   color: #c0c0c0;
//   margin-bottom: 14px;
//   line-height: 1.5;
// `;

// const ProjectFocus = styled.p`
//   font-size: 13px;
//   color: #888;
//   margin-bottom: 18px;
// `;

// const ProjectLink = styled.a`
//   color: #5d50e6;
//   text-decoration: none;
//   font-weight: 600;

//   &:hover {
//     color: #7a70ff;
//   }
// `;

// const Note = styled.p`
//   margin-top: 40px;
//   font-size: 14px;
//   color: #777;
// `;








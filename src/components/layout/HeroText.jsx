// import React from "react";
// import styled, { keyframes } from "styled-components";
// import Button from "../common/Button";
// import Navbar from "./Navbar";

// const HeroText = () => {
//   return (
//     <Section className="heroText" id="home">
//       <NavbarDiv>
//         <Navbar />
//       </NavbarDiv>

//       <MainSection>
//         <HeroHeadingDiv className="heroText__container1">
//           <HeroHeading>
//             We Build Websites That Help Your Business Grow
//           </HeroHeading>
//         </HeroHeadingDiv>

//         <HeadingPeraDiv className="heroText__container2">
//           <HeadingPera>
//             <span className="webxlayer"> WebX Layer</span> creates modern, fast,
//             and scalable websites for startups and businesses ready to stand out
//             online.
//           </HeadingPera>
//         </HeadingPeraDiv>
//       </MainSection>

//       <Button />
//     </Section>
//   );
// };

// export default HeroText;

// /* ================= ANIMATIONS ================= */

// const fadeUp = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(30px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// /* ================= STYLES ================= */

// const Section = styled.section`
//   width: auto;
//   text-align: center;
//   background-color: black;
//   color: white;
//   height: 80vh;
//   display: flex;
//   gap: 10%;
//   flex-direction: column;
//   align-items: center;
//   padding-top: 2%;

//   @media (max-width: 768px) {
//     padding-top: 15%;
//   }
// `;

// const NavbarDiv = styled.div`
//   width: 100%;
// `;

// const MainSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 16px;
//   max-width: 1100px;
//   margin: 0 auto;
// `;

// const HeroHeadingDiv = styled.div`
//   width: 100%;
//   max-width: 800px;
// `;

// const HeroHeading = styled.h1`
//   font-size: clamp(32px, 6vw, 58px);
//   font-weight: 900;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   text-align: center;
//   line-height: 1.15;
//   margin: 0;

//   animation: ${fadeUp} 0.8s ease-out forwards;
// `;

// const HeadingPeraDiv = styled.div`
//   width: 100%;
//   max-width: 700px;
// `;

// const HeadingPera = styled.p`
//   font-size: clamp(16px, 2.5vw, 18px);
//   line-height: 1.6;
//   margin: 0;
//   color: #555;
//   text-align: center;
//   font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

//   animation: ${fadeUp} 0.8s ease-out forwards;
//   animation-delay: 0.2s;
//   opacity: 0;
// `;





import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "./Navbar";

const HeroText = () => {
  return (
    <Section id="home">
      <NavbarDiv>
        <Navbar />
      </NavbarDiv>

      <MainSection>

        <SmallText>
          Helping Local Service Businesses Grow Online
        </SmallText>

        <HeroHeading>
          Websites That Help Local Service Businesses Get More Calls & Book More Jobs
        </HeroHeading>

        <HeadingPera>
          We build fast, conversion-focused websites for plumbing, HVAC, roofing,
          and home service businesses that turn visitors into real phone calls
          and paying customers.
        </HeadingPera>

        <CTAButton
          onClick={() =>
            window.open("https://calendly.com/webxlayer/30min", "_blank")
          }
        >
          Book My Free Website Audit
        </CTAButton>

      </MainSection>
    </Section>
  );
};

export default HeroText;

/* ================= ANIMATIONS ================= */

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* ================= STYLES ================= */

const Section = styled.section`
  width: 100%;
  background-color: #000;
  color: #fff;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  text-align: center;
`;

const NavbarDiv = styled.div`
  width: 100%;
`;

const MainSection = styled.div`
  max-width: 900px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0 20px;
`;

const SmallText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #5D50E6;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
  animation: ${fadeUp} 0.8s ease-out forwards;
`;

const HeroHeading = styled.h1`
  font-size: clamp(36px, 6vw, 58px);
  font-weight: 900;
  line-height: 1.1;
  margin: 0;
  animation: ${fadeUp} 0.8s ease-out forwards;
  animation-delay: 0.1s;
`;

const HeadingPera = styled.p`
  font-size: clamp(18px, 2.5vw, 20px);
  line-height: 1.6;
  color: #ccc;
  max-width: 720px;
  margin: 0;
  animation: ${fadeUp} 0.8s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
`;

const CTAButton = styled.button`
  padding: 16px 34px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  background: #5D50E6;
  color: #fff;
  transition: all 0.3s ease;

  animation: ${fadeUp} 0.8s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import Navbar from "./Navbar";


const HeroText = () => {
  

    return (

        <Section className="heroText" id="home">
          <NavbarDiv>
          <Navbar/>
          </NavbarDiv>

            <MainSection>
                <HeroHeadingDiv className="heroText__container1">
                    <HeroHeading>We Build Websites That Help Your Business Grow</HeroHeading>
                </HeroHeadingDiv>

                <HeadingPeraDiv className="heroText__container2">
                    <HeadingPera><span className="webxlayer"> WebX Layer</span> creates modern, fast, and scalable websites for startups and businesses ready to stand out online.</HeadingPera>
                </HeadingPeraDiv>

            </MainSection>
          
        <Button/>
        </Section>


    )


};


const Section = styled.section`
  width: auto;
  text-align: center;
  backgrount-color:black;
  color:white;
  background-color: black;
  height: 80vh;
  display: flex;
  gap: 10%;
  flex-direction: column;
  align-items: center;
   padding-top: 2%;
  @media (max-width: 768px) {
 padding-top: 15%;    }
`;

const NavbarDiv = styled.div`
width: 100%;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 1100px;
  margin: 0 auto;
`;

const HeroHeadingDiv = styled.div`
  width: 100%;
  max-width: 800px;
`;

const HeroHeading = styled.h1`
  font-size: clamp(32px, 6vw, 58px);
  font-weight: 900;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  line-height: 1.15;
  margin: 0;
`;

const HeadingPeraDiv = styled.div`
  width: 100%;
  max-width: 700px;
`;

const HeadingPera = styled.p`
  font-size: clamp(16px, 2.5vw, 18px);
  line-height: 1.6;
  margin: 0;
  color: #555;
  text-align: center;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

`;


export default HeroText;
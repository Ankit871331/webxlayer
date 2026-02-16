import React from "react";
import styled from "styled-components";

const WhyChoose = () => {
  return (
    <Section id="why-choose">
      <Heading>
        Why Local Service Businesses <br /> <span>Choose WebX Layer</span>
      </Heading>

      <SubHeading>
        We don’t just design websites — we build conversion-focused systems
        that help plumbers, HVAC, roofing, and home service businesses
        generate more calls and book more jobs.
      </SubHeading>

      <CardWrapper>

        <Card>
          <IconCircle>📞</IconCircle>
          <Title>Built to Generate More Calls</Title>
          <Text>
            Every website is structured to guide visitors toward one goal —
            calling your business or booking your service.
          </Text>
        </Card>

        <Card>
          <IconCircle>🚀</IconCircle>
          <Title>Optimized for Local Search</Title>
          <Text>
            We structure your website to support local SEO, helping you
            appear when customers search for services in your area.
          </Text>
        </Card>

        <Card>
          <IconCircle>⚡</IconCircle>
          <Title>Fast, Mobile-First Experience</Title>
          <Text>
            Most service calls come from mobile. We ensure your site loads
            fast and works perfectly on every device.
          </Text>
        </Card>

        <Card>
          <IconCircle>🤝</IconCircle>
          <Title>Clear Pricing & Ongoing Support</Title>
          <Text>
            No hidden fees. Transparent pricing, realistic timelines,
            and continued support after launch.
          </Text>
        </Card>

      </CardWrapper>
    </Section>
  );
};

export default WhyChoose;

/* ===== STYLES ===== */

const Section = styled.section`
  background: #ffffff;
  padding: 100px 8%;
`;

const Heading = styled.h2`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  color: #000;
  margin-bottom: 14px;

  span {
    color: #5D50E6;
  }

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const SubHeading = styled.p`
  text-align: center;
  font-size: 17px;
  color: #555;
  max-width: 750px;
  margin: 0 auto 70px auto;
  line-height: 1.7;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #000;
  color: #fff;
  padding: 40px 30px;
  border-radius: 18px;
  transition: all 0.3s ease;
  border: 1px solid #1f1f1f;

  &:hover {
    transform: translateY(-10px);
    border-color: #5D50E6;
  }
`;

const IconCircle = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin-bottom: 24px;
`;

const Title = styled.h3`
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 14px;
`;

const Text = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #cccccc;
`;

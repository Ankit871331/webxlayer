import React from "react";
import styled from "styled-components";

const WhyChoose = () => {
  return (
    <Section id="why-choose">
      <Heading>
        Why Choose <br /> <span>WebX Layer</span>
      </Heading>

      <SubHeading>
        We focus on clean design, clear communication, and websites that actually
        help your business grow online.
      </SubHeading>

      <CardWrapper>
        <Card>
          <IconCircle>⚡</IconCircle>
          <Title>Fast & Responsive</Title>
          <Text>
            Websites built for speed and smooth performance on mobile, tablet,
            and desktop devices.
          </Text>
        </Card>

        <Card>
          <IconCircle>🎯</IconCircle>
          <Title>Business-First Design</Title>
          <Text>
            Simple, modern layouts designed to clearly present your services and
            build customer trust.
          </Text>
        </Card>

        <Card>
          <IconCircle>🔒</IconCircle>
          <Title>Clean & SEO-Ready Code</Title>
          <Text>
            Structured code with basic SEO setup to help your website get
            discovered on search engines.
          </Text>
        </Card>

        <Card>
          <IconCircle>🤝</IconCircle>
          <Title>Transparent Pricing</Title>
          <Text>
            No hidden costs. Clear pricing, honest timelines, and support even
            after your website goes live.
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
  padding: 80px 8%;
`;

const Heading = styled.h2`
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  color: #000;
  margin-bottom: 12px;

  span {
    border-bottom: 2px solid #000;
  }

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const SubHeading = styled.p`
  text-align: center;
  font-size: 16px;
  color: #555;
  max-width: 650px;
  margin: 0 auto 60px auto;
  line-height: 1.6;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;

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
  padding: 36px 28px;
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid #1f1f1f;

  &:hover {
    transform: translateY(-10px);
    border-color: #444;
  }
`;

const IconCircle = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin-bottom: 22px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #cccccc;
`;

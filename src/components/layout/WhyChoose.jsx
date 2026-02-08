import React from "react";
import styled from "styled-components";

const WhyChoose = () => {
  return (
    <Section id="why-choose">
      <Heading>
        Why Businesses Choose <br /><span className="webxlayer">WebX Layer</span>
      </Heading>

      <CardWrapper>
        <Card>
          <IconCircle>
            <Line />
            <Line />
            <Line />
          </IconCircle>
          <Title>Fast & Responsive Websites</Title>
          <Text>
            Optimized for speed and smooth experience across all screen sizes.
          </Text>
        </Card>

        <Card>
          <IconCircle>
            <Target />
          </IconCircle>
          <Title>Business-Focused Design</Title>
          <Text>
            Design decisions driven by user behavior and conversion goals.
          </Text>
        </Card>

        <Card>
          <IconCircle>
            <Shield />
          </IconCircle>
          <Title>Secure & SEO-Ready</Title>
          <Text>
            Clean architecture, security best practices, and SEO-ready setup.
          </Text>
        </Card>

        <Card>
          <IconCircle>
            <Handshake />
          </IconCircle>
          <Title>Transparent Pricing & Support</Title>
          <Text>
            Honest pricing, clear timelines, and long-term technical support.
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
    height:auto;
    padding: 60px 8%;
`;

const Heading = styled.h2`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 60px;
  color: #000;

  span {
    border-bottom: 2px solid #000;
  }
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
  padding: 36px 30px;
  border-radius: 14px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const IconCircle = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Line = styled.div`
  width: 16px;
  height: 2px;
  background: #fff;
  margin: 2px 0;
`;

const Target = styled.div`
  width: 14px;
  height: 14px;
  border: 2px solid #fff;
  border-radius: 50%;
`;

const Shield = styled.div`
  width: 14px;
  height: 18px;
  border: 2px solid #fff;
  border-radius: 0 0 8px 8px;
`;

const Handshake = styled.div`
  width: 18px;
  height: 2px;
  background: #fff;
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

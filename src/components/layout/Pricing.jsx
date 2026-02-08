// import React from "react";
// import styled from "styled-components";

// const PricingSection = () => {
//   return (
//     <Section>
//       <Title>💰 6️⃣ Pricing / Plans</Title>
//       <Subtitle>
//         Choose the plan that fits your business. Transparency & simplicity, always.
//       </Subtitle>

//       <CardsContainer>
//         {/* Basic Website */}
//         <Card>
//           <CardHeader>Basic Website</CardHeader>
//           <Price>Starting from ₹X</Price>
//           <Description>
//             Perfect for individuals or small businesses who want a simple web presence.
//           </Description>
//           <Features>
//             <Feature>✅ 1 Team Member</Feature>
//             <Feature>✅ 3 Pages</Feature>
//             <Feature>✅ 1 Workflow</Feature>
//             <Feature>❌ Custom Branding</Feature>
//             <Feature>❌ Self Host</Feature>
//           </Features>
//         </Card>

//         {/* Business Website */}
//         <Card popular>
//           <PopularBadge>Most Popular</PopularBadge>
//           <CardHeader>Business Website</CardHeader>
//           <Price>Starting from ₹X</Price>
//           <Description>
//             For businesses looking to grow online efficiently. Scalable & smooth.
//           </Description>
//           <Features>
//             <Feature>✅ Unlimited Team Members</Feature>
//             <Feature>✅ Unlimited Pages</Feature>
//             <Feature>✅ Multiple Workflows</Feature>
//             <Feature>✅ Upgraded Support</Feature>
//             <Feature>❌ Self Host</Feature>
//           </Features>
//         </Card>

//         {/* Custom Website */}
//         <Card>
//           <CardHeader>Custom Website</CardHeader>
//           <Price>Contact Us</Price>
//           <Description>
//             Tailored solutions for enterprises or special projects. Full support included.
//           </Description>
//           <Features>
//             <Feature>✅ Unlimited Team Members</Feature>
//             <Feature>✅ Unlimited Pages</Feature>
//             <Feature>✅ Workflows</Feature>
//             <Feature>✅ Custom Branding</Feature>
//             <Feature>✅ Self Host</Feature>
//           </Features>
//         </Card>
//       </CardsContainer>
//     </Section>
//   );
// };

// // Styled Components
// const Section = styled.section`
//   padding: 80px 20px;
//   background: #f9f9f9;
//   text-align: center;
// `;

// const Title = styled.h2`
//   font-size: 2.5rem;
//   margin-bottom: 10px;
// `;

// const Subtitle = styled.p`
//   font-size: 1.1rem;
//   color: #555;
//   margin-bottom: 50px;
// `;

// const CardsContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 30px;
// `;

// const Card = styled.div`
//   background: ${({ popular }) => (popular ? "#4f46e5" : "#fff")};
//   color: ${({ popular }) => (popular ? "#fff" : "#000")};
//   border-radius: 16px;
//   padding: 30px;
//   width: 300px;
//   box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
//   position: relative;
//   transition: transform 0.3s ease;
//   &:hover {
//     transform: translateY(-10px);
//   }
// `;

// const PopularBadge = styled.div`
//   position: absolute;
//   top: -10px;
//   right: -10px;
//   background: #e0e7ff;
//   color: #4f46e5;
//   padding: 5px 12px;
//   border-radius: 12px;
//   font-size: 0.8rem;
//   font-weight: bold;
// `;

// const CardHeader = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 15px;
// `;

// const Price = styled.div`
//   font-size: 1.7rem;
//   font-weight: bold;
//   margin-bottom: 15px;
// `;

// const Description = styled.p`
//   font-size: 1rem;
//   margin-bottom: 20px;
// `;

// const Features = styled.ul`
//   list-style: none;
//   padding: 0;
//   text-align: left;
// `;

// const Feature = styled.li`
//   margin-bottom: 10px;
//   font-size: 0.95rem;
// `;

// export default PricingSection;



import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
  text-align: center;
  color: #000;
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 800;
  margin-bottom: 60px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const Card = styled.div`
  padding: 40px 32px;
  border-radius: 12px;
  text-align: left;
  position: relative;
  display: flex;
  flex-direction: column;
  
  /* Applying the specific border and hard shadow only to highlighted card */
  border: ${props => props.highlight ? '2px solid #000' : '2px solid transparent'};
  box-shadow: ${props => props.highlight ? '8px 8px 0px 0px #000' : 'none'};
`;

const Tag = styled.span`
  position: absolute;
  top: -14px;
  right: 24px;
  background: #5D50E6;
  color: white;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
`;

const PlanName = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 16px 0;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 16px;
`;

const Amount = styled.span`
  font-size: 72px;
  font-weight: 800;
  line-height: 1;
`;

const Billing = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  color: #666;
  font-size: 14px;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 32px;
  min-height: 48px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  flex-grow: 1;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  font-size: 15px;
  color: ${props => props.included ? '#000' : '#A0A0A0'};
`;

const IconBox = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid ${props => props.included ? '#5D50E6' : '#D1D1D1'};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-size: 10px;
  color: ${props => props.included ? '#5D50E6' : '#A0A0A0'};
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  background: ${props => props.purple ? '#5D50E6' : '#121212'};
  color: white;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

// --- Main Component ---

const PricingTable = () => {
  const plans = [
    {
      name: "Individuals",
      price: "0",
      desc: "For individuals looking to up their productivity gains. Free forever.",
      features: [
        { text: "1 Team Member", inc: true },
        { text: "3 Boards", inc: true },
        { text: "5 Workflows", inc: true },
        { text: "Upgraded Support", inc: false },
        { text: "Custom Branding", inc: false },
        { text: "Self Host", inc: false },
      ]
    },
    {
      name: "Teams",
      price: "8",
      desc: "For teams looking to scale their team efficiently. Stay on track.",
      highlight: true,
      tag: "Most Popular",
      features: [
        { text: "∞ Team Members", inc: true },
        { text: "∞ Boards", inc: true },
        { text: "∞ Workflows", inc: true },
        { text: "Upgraded Support", inc: true },
        { text: "Custom Branding", inc: false },
        { text: "Self Host", inc: false },
      ]
    },
    {
      name: "Enterprise",
      price: "16",
      desc: "For enterprises looking to see new heights. Manage without the stress",
      features: [
        { text: "∞ Team Members", inc: true },
        { text: "∞ Boards", inc: true },
        { text: "∞ Workflows", inc: true },
        { text: "Enterprise Support", inc: true },
        { text: "Custom Branding", inc: true },
        { text: "Self Host", inc: true },
      ]
    }
  ];

  return (
    <Container id='prising'>
      <Title>Pricing</Title>
      <Grid>
        {plans.map((plan, i) => (
          <Card key={i} highlight={plan.highlight}>
            {plan.tag && <Tag>{plan.tag}</Tag>}
            
            <PlanName>{plan.name}</PlanName>
            <PriceWrapper>
              <Amount>${plan.price}</Amount>
              <Billing>
                <span>/user</span>
                <span>/month</span>
              </Billing>
            </PriceWrapper>
            
            <Description>{plan.desc}</Description>
            
            <FeatureList>
              {plan.features.map((f, idx) => (
                <FeatureItem key={idx} included={f.inc}>
                  <IconBox included={f.inc}>
                    {f.inc ? '✔' : '✖'}
                  </IconBox>
                  {f.text}
                </FeatureItem>
              ))}
            </FeatureList>
            
            <Button purple={plan.highlight}>TRY IT NOW</Button>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default PricingTable;
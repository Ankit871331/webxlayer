import React from "react";
import styled from "styled-components";

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

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    max-width: 420px;
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

  border: ${props => props.highlight ? '2px solid #000' : '1px solid #E5E5E5'};
  box-shadow: ${props => props.highlight ? '8px 8px 0px #000' : 'none'};
`;

const Tag = styled.span`
  position: absolute;
  top: -14px;
  right: 24px;
  background: #5D50E6;
  color: #fff;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
`;

const PlanName = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const Amount = styled.div`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 15px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 28px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 36px 0;
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
  background: ${props => props.primary ? '#5D50E6' : '#121212'};
  color: #fff;

  &:hover {
    opacity: 0.9;
  }
`;

// --- Main Component ---

const PricingTable = () => {

  // ✅ WhatsApp Redirect Function
  const openWhatsApp = (planName) => {
    const phoneNumber = "9015467191";
    const message = `Hi, I'm interested in the ${planName} plan. Please share more details.`;
    const url = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const plans = [
    {
      name: "Individuals / Starters",
      price: "₹4,999",
      desc: "Best for personal brands, freelancers & individuals starting online.",
      features: [
        { text: "1–3 Page Website", inc: true },
        { text: "Responsive Design", inc: true },
        { text: "Basic UI/UX", inc: true },
        { text: "Contact Form", inc: true },
        { text: "SEO Optimization", inc: false },
        { text: "Backend / Admin Panel", inc: false },
      ],
      btn: "Get Started"
    },
    {
      name: "Business",
      price: "₹9,999",
      desc: "Perfect for startups & small businesses who want a professional presence.",
      highlight: true,
      tag: "Most Popular",
      features: [
        { text: "5–7 Page Website", inc: true },
        { text: "Custom UI/UX Design", inc: true },
        { text: "Mobile Optimized", inc: true },
        { text: "Basic SEO Setup", inc: true },
        { text: "WhatsApp Integration", inc: true },
        { text: "1 Month Support", inc: true },
      ],
      btn: "Start Business Site"
    },
    {
      name: "Enterprise / Custom",
      price: "Custom",
      desc: "Advanced solutions for brands needing scalability & custom features.",
      features: [
        { text: "Unlimited Pages", inc: true },
        { text: "Custom Animations", inc: true },
        { text: "Backend / Admin Panel", inc: true },
        { text: "Database Integration", inc: true },
        { text: "Advanced SEO", inc: true },
        { text: "Priority Support", inc: true },
      ],
      btn: "Contact Us"
    }
  ];

  return (
    <Container id="pricing">
      <Title>Pricing</Title>
      <Grid>
        {plans.map((plan, i) => (
          <Card key={i} highlight={plan.highlight}>
            {plan.tag && <Tag>{plan.tag}</Tag>}

            <PlanName>{plan.name}</PlanName>
            <Amount>{plan.price}</Amount>

            <Description>{plan.desc}</Description>

            <FeatureList>
              {plan.features.map((f, idx) => (
                <FeatureItem key={idx} included={f.inc}>
                  <IconBox included={f.inc}>
                    {f.inc ? "✔" : "✖"}
                  </IconBox>
                  {f.text}
                </FeatureItem>
              ))}
            </FeatureList>

            <Button
              primary={plan.highlight}
              onClick={() => openWhatsApp(plan.name)}
            >
              {plan.btn}
            </Button>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default PricingTable;

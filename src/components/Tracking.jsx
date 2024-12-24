import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingInfo, setTrackingInfo] = useState(null);

  const handleTrackingNumberChange = (e) => {
    setTrackingNumber(e.target.value);
  };

  const handleTrack = async (e) => {
    e.preventDefault();
    // Simulate fetching tracking information from an API
    // Replace this with actual API call
    const fetchedTrackingInfo = {
      status: "In Transit",
      estimatedDelivery: "2024-11-29",
      currentLocation: "Johannesburg, South Africa"
    };
    setTrackingInfo(fetchedTrackingInfo);
  };

  return (
    <div className="container">
      <Hero>
        <HeroImage src="/images/computerGuy.png" alt="Hero" />

        <HeroText>
          <h1>Track Your Order</h1>
          <p>Enter your tracking number to get the latest updates</p>
        </HeroText>
      </Hero>
      <Section>
        <SectionTitle>Tracking Information</SectionTitle>
        <Link to="https://wa.me/27639236774">
          <CTAButton type="submit">Track</CTAButton>
          {trackingInfo && (
            <TrackingDetails>
              <p>Status: {trackingInfo.status}</p>
              <p>Estimated Delivery: {trackingInfo.estimatedDelivery}</p>
              <p>Current Location: {trackingInfo.currentLocation}</p>
            </TrackingDetails>
          )}
        </Link>
      </Section>
      <Section>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQList>
          <FAQItem>
            <Question>How can I track my order?</Question>
            <Answer>
              Enter your tracking number in the form above to get the latest
              updates.
            </Answer>
          </FAQItem>
        </FAQList>
      </Section>
      <Section>
        <SectionTitle>Subscribe to Our Newsletter</SectionTitle>
        <NewsletterForm>
          <NewsletterInput
            type="email"
            placeholder="Enter your email"
            required
          />
          <CTAButton type="submit">Subscribe</CTAButton>
        </NewsletterForm>
      </Section>
      <Footer>
        <SocialLinks>
          <SocialLink href="https://facebook.com" target="_blank">
            Facebook
          </SocialLink>
          <SocialLink href="https://twitter.com" target="_blank">
            Twitter
          </SocialLink>
          <SocialLink href="https://instagram.com" target="_blank">
            Instagram
          </SocialLink>
        </SocialLinks>
        <ContactInfo>
          <p>Contact us at: support@mytracking.com</p>
        </ContactInfo>
      </Footer>
    </div>
  );
};

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-color: #333;
  color: #fff;
`;

const HeroText = styled.div`
  text-align: center;
`;

const CTAButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const Section = styled.section`
  width: 100%;
  padding: 40px 0;
  Link {
    justify-content: center;
    align-items: center;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const TrackingForm = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const TrackingInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  width: 300px;
`;

const TrackingDetails = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const HeroImage = styled.img`
  width: 25%;
  height: 45px;
`;
const FAQItem = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  width: 80%;
  text-align: left;
`;

const Question = styled.p`
  font-weight: bold;
  font-size: 1rem;
`;

const Answer = styled.p`
  font-size: 1rem;
  color: #555;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const NewsletterInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  width: 300px;
`;

const Footer = styled.footer`
  width: 100%;
  padding: 20px 0;
  text-align: center;
  background-color: #333;
  color: #fff;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  color: #007bff;
  text-decoration: none;
`;

const ContactInfo = styled.div`
  font-size: 0.9rem;
`;

export default Tracking;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Help = () => {
  return (
    <Container>
      <Hero>
        <HeroText>
          <h1>How Can We Help You?</h1>
          <p>
            Find answers to your questions and get in touch with our support
            team
          </p>
        </HeroText>
      </Hero>
      <Section>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQList>
          {/* Add your FAQ items here */}
          <FAQItem>
            <Question>How do I track my order?</Question>
            <Answer>
              <Link to="/tracking">
                You can track your order by entering your tracking number on the
                tracking page.
              </Link>
            </Answer>
          </FAQItem>
          <FAQItem>
            <Question>What is the return policy?</Question>
            <Answer>
              You can return any item within 7 days of purchase for a full
              refund.
            </Answer>
          </FAQItem>
          {/* Repeat FAQItem for more questions */}
        </FAQList>
      </Section>
      <Section>
        <SectionTitle>Contact Support</SectionTitle>
        <ContactForm>
          <ContactInput type="text" placeholder="Your Name" required />
          <ContactInput type="email" placeholder="Your Email" required />
          <ContactTextarea
            placeholder="Your Message"
            required
          ></ContactTextarea>
          <CTAButton type="submit">Send</CTAButton>
        </ContactForm>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
`;

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-color: #333;
  color: #fff;
`;

const HeroImage = styled.img`
  width: 50%;
  height: auto;
`;

const HeroText = styled.div`
  width: 50%;
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
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
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

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const ContactInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  width: 300px;
`;

const ContactTextarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  width: 300px;
  height: 100px;
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

export default Help;

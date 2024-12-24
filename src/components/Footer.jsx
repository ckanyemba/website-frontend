import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        {/* Add your social media links here */}
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
      <FooterNav>
        <FooterNavItem to="/">Home</FooterNavItem>
        <FooterNavItem to="/shop">Shop</FooterNavItem>
        <FooterNavItem to="/about">About Us</FooterNavItem>
        <FooterNavItem to="/contact">Contact</FooterNavItem>
        <FooterNavItem to="/accessories">Accessories</FooterNavItem>
        <FooterNavItem to="/help">Help</FooterNavItem>
      </FooterNav>
      <ContactInfo>
        <p>Contact us at: support@craigkanyemba.africa</p>
      </ContactInfo>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px 0;
  text-align: center;
  background-color: #333;
  color: #fff;
  margin-bottom: 20px;
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

const FooterNav = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
`;

const FooterNavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
`;

const ContactInfo = styled.div`
  font-size: 0.9rem;
`;

export default Footer;

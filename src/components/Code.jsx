import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Code = () => {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      description: "Description of project 1",
      link: "https://github.com/username/project1"
    },
    {
      id: 2,
      name: "Project 2",
      description: "Description of project 2",
      link: "https://github.com/username/project2"
    },
    {
      id: 3,
      name: "Project 3",
      description: "Description of project 3",
      link: "https://github.com/username/project3"
    }
    // Add more projects here
  ];

  return (
    <Container>
      <Header>
        <Logo>Portfolio</Logo>
        <Nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </Nav>
      </Header>
      <Hero>
        <HeroText>
          <h1>Welcome to My Portfolio</h1>
          <p>Discover my projects and skills</p>
        </HeroText>
      </Hero>
      <Section>
        <SectionTitle>About Me</SectionTitle>
        <AboutText>
          Hello! I'm a passionate computer programmer with experience in various
          technologies and programming languages. I enjoy building web
          applications, exploring new technologies, and solving complex
          problems.
        </AboutText>
      </Section>
      <Section>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink href={project.link} target="_blank">
                View Project
              </ProjectLink>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Section>
      <Section>
        <SectionTitle>Contact Me</SectionTitle>
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
      <Footer>
        <SocialLinks>
          {/* Add your social media links here */}
          <SocialLink href="https://linkedin.com" target="_blank">
            LinkedIn
          </SocialLink>
          <SocialLink href="https://github.com" target="_blank">
            GitHub
          </SocialLink>
          <SocialLink href="https://twitter.com" target="_blank">
            Twitter
          </SocialLink>
        </SocialLinks>
        <ContactInfo>
          <p>Contact me at: email@myportfolio.com</p>
        </ContactInfo>
      </Footer>
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

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
`;

const Logo = styled.h1`
  font-size: 2rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
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

const AboutText = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #555;
  max-width: 800px;
`;

const ProjectsGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  width: 300px;
  text-align: center;
`;

const ProjectName = styled.h3`
  font-size: 1.2rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ProjectLink = styled.a`
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
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

export default Code;

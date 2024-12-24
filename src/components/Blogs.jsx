import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import moment from "moment";

const Blogs = () => {
  const { items: data, status } = useSelector((state) => state.blogs);

  return (
    <Container>
      <Hero>
        <HeroImage src="/images/unnamed.jpg" alt="Hero" />
        <HeroText>
          <h1>Welcome to MyBlog</h1>
          <p>Insights and stories from our journey</p>
          <CTAButton>Read Latest Post</CTAButton>
        </HeroText>
      </Hero>
      <Section>
        <SectionTitle>Featured Posts</SectionTitle>
        {status === "loading" ? (
          <p>Loading...</p>
        ) : (
          <PostsGrid>
            {data &&
              data.map((blog) => (
                <PostCard key={blog._id}>
                  <PostImage src={blog.image} alt={blog.title} />
                  <PostTitle>{blog.title}</PostTitle>
                  <PostExcerpt>{blog.excerpt}</PostExcerpt>
                  <Link to={`/blog/${blog._id}`}>
                    <CTAButton>Read More</CTAButton>
                  </Link>
                </PostCard>
              ))}
          </PostsGrid>
        )}
      </Section>
      <Section>
        <SectionTitle>Categories</SectionTitle>
        <CategoriesList>
          <Category>
            <Link to="/blog/category/tech">Tech</Link>
          </Category>
          <Category>
            <Link to="/blog/category/lifestyle">Lifestyle</Link>
          </Category>
          <Category>
            <Link to="/blog/category/business">Business</Link>
          </Category>
        </CategoriesList>
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

const PostsGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const PostCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  width: 300px;
  text-align: center;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
`;

const PostTitle = styled.h3`
  font-size: 1.2rem;
`;

const PostExcerpt = styled.p`
  font-size: 1rem;
  color: #555;
`;

const CategoriesList = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const Category = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
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

export default Blogs;

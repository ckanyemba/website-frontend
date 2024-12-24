import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import moment from "moment";
import { addToCart } from "../features/cartSlice";

const Shop = () => {
  const { items: data, status } = useSelector((state) => state.products);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (event) => {
    const { value } = event.target;
    const [min, max] = value.split(",").map(Number);
    setPriceRange([min, max]);
  };

  return (
    <div className="container">
      <Header>
        <Logo>MyShop</Logo>
        <Nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/shop">Shop</NavItem>
          <NavItem to="/about">About Us</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/accessories">Accessories</NavItem>
          <NavItem to="/help">Help</NavItem>
        </Nav>
      </Header>
      <Hero>
        <HeroText>
          <h1>Welcome to Our Shop</h1>
          <p>Discover a wide range of products at great prices</p>
        </HeroText>
      </Hero>
      <Section>
        {" "}
        <SectionTitle>Products</SectionTitle>
        <ProductsGrid>
          {status === "success" ? (
            <>
              {data &&
                data?.map((product) => (
                  <div className="ProductCard" key={product._id}>
                    <ProductImage src={product.image.url} alt={product.name} />
                    <ProductName>{product.name}</ProductName>
                    <div className="details">
                      <span>{product.desc}</span>
                      <div>
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          find out on ebooks
                        </a>
                      </div>
                      <div>
                        <span>
                          {moment(product.date).format("MMMM Do YYYY")}
                        </span>
                      </div>
                      <span className="price">R{product.price}</span>
                    </div>
                    <div>
                      <button
                        className="product-button"
                        onClick={() => handleAddToCart(product)}
                      >
                        {" "}
                        paperback{" "}
                      </button>
                    </div>
                  </div>
                ))}
            </>
          ) : status === "pending" ? (
            <p> Loading ... </p>
          ) : (
            <p>Unexpected error occured ... </p>
          )}
        </ProductsGrid>
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
        <ContactInfo>
          <p>Contact us at: support@myshop.com</p>
        </ContactInfo>
      </Footer>
    </div>
  );
};

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

const ProductsGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  width: 300px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #007bff;
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

export default Shop;

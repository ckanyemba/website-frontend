import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import moment from "moment";
import { addToCart } from "../features/cartSlice";

const Books = () => {
  const { items: data, status } = useSelector((state) => state.books);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
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
  const renderBooks = (genre) => {
    return (
      <ProductsGrid>
        {" "}
        {status === "success" ? (
          data
            .filter((book) => book.genre === genre)
            .map((book) => (
              <ProductCard key={book._id}>
                {" "}
                <ProductImage src={book.image} alt={book.title} />{" "}
                <ProductAuthor>{book.title}</ProductAuthor>{" "}
                <ProductAuthor>{book.author}</ProductAuthor>{" "}
                <ProductPrice>{`R${book.price}`}</ProductPrice>{" "}
                <CTAButton onClick={() => handleAddToCart(book)}>
                  {" "}
                  Add to Cart{" "}
                </CTAButton>{" "}
              </ProductCard>
            ))
        ) : status === "pending" ? (
          <p>Loading...</p>
        ) : (
          <p>Unexpected error occurred...</p>
        )}{" "}
      </ProductsGrid>
    );
  };
  return (
    <div className="container">
      <Header>
        <Logo>Book Store</Logo>
        <Nav>
          <NavItem to="/help">Help</NavItem>
        </Nav>
      </Header>
      <Hero>
        <HeroImage src="/images/books1.jpg" alt="Hero" />
        <HeroText>
          <h1>Explore Our Book Collection</h1>
          <p>Discover a wide range of books from various genres</p>
        </HeroText>
      </Hero>
      <Section>
        {" "}
        <SectionTitle>Fiction</SectionTitle> {renderBooks("Fiction")}{" "}
      </Section>{" "}
      <Section>
        {" "}
        <SectionTitle>Non-Fiction</SectionTitle> {renderBooks("Non-Fiction")}{" "}
      </Section>{" "}
      <Section>
        {" "}
        <SectionTitle>Science Fiction</SectionTitle>{" "}
        {renderBooks("Science Fiction")}{" "}
      </Section>{" "}
      <Section>
        {" "}
        <SectionTitle>Fantasy</SectionTitle> {renderBooks("Fantasy")}{" "}
      </Section>{" "}
      <Section>
        {" "}
        <SectionTitle>Romance</SectionTitle> {renderBooks("Romance")}{" "}
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

const ProductAuthor = styled.p`
  font-size: 1rem;
  color: #555;
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

export default Books;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Home = () => {
  const { items: prodData, status: prodStatus } = useSelector(
    (state) => state.products
  );
  const { items: sculpData, status: sculpStatus } = useSelector(
    (state) => state.sculptures
  );
  const { items: bookData, status: bookStatus } = useSelector(
    (state) => state.books
  );
  const { items: blogData, status: blogStatus } = useSelector(
    (state) => state.blogs
  );

  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email subscription
  };
  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
    navigate("/cart");
  };

  return (
    <div className="container">
      <Section>
        <SectionTitle>Featured Books</SectionTitle>
        <div className="ProductsGrid">
          {bookStatus === "success" ? (
            <>
              {bookData &&
                bookData.slice(0, 8).map((book) => (
                  <div className="ProductCard" key={book._id}>
                    <ProductImage src={book.image} alt={book.title} />
                    <ProductName>{book.title}</ProductName>
                    <ProductAuthor>{book.author}</ProductAuthor>
                    <ProductPrice>{`R${book.price}`}</ProductPrice>
                    <CTAButton onClick={() => handleAddToCart(book)}>
                      Add to Cart
                    </CTAButton>
                  </div>
                ))}
            </>
          ) : bookStatus === "pending" ? (
            <p>Loading...</p>
          ) : (
            <p>Unexpected error occurred...</p>
          )}
        </div>
      </Section>
      <Section>
        <SectionTitle>Featured Products</SectionTitle>
        <div className="ProductsGrid">
          {prodStatus === "success" ? (
            <>
              {prodData &&
                prodData.slice(0, 8).map((product) => (
                  <div className="ProductCard" key={product._id}>
                    <ProductImage src={product.image.url} alt={product.name} />
                    <ProductName>{product.name}</ProductName>
                    <ProductDesc>{product.desc}</ProductDesc>
                    <ProductPrice>R{product.price}</ProductPrice>

                    <CTAButton onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </CTAButton>
                  </div>
                ))}
            </>
          ) : prodStatus === "pending" ? (
            <p>Loading...</p>
          ) : (
            <p>Unexpected error occurred...</p>
          )}
        </div>
      </Section>
      <Section>
        <SectionTitle>Featured Sculptures</SectionTitle>
        <div className="ProductsGrid">
          {sculpStatus === "success" ? (
            <>
              {sculpData &&
                sculpData.slice(0, 8).map((sculpture) => (
                  <div className="ProductCard" key={sculpture._id}>
                    <ProductImage
                      src={sculpture.image.url}
                      alt={sculpture.name}
                    />
                    <ProductName>{sculpture.name}</ProductName>
                    <ProductDesc>{sculpture.desc}</ProductDesc>
                    <ProductPrice>R{sculpture.price}</ProductPrice>
                    <CTAButton onClick={() => handleAddToCart(sculpture)}>
                      Add to Cart
                    </CTAButton>
                  </div>
                ))}
            </>
          ) : sculpStatus === "pending" ? (
            <p>Loading...</p>
          ) : (
            <p>Unexpected error occurred...</p>
          )}
        </div>
      </Section>

      <Section>
        <SectionTitle>Featured Posts</SectionTitle>
        <div className="ProductsGrid">
          {blogStatus === "loading" ? (
            <p>Loading...</p>
          ) : (
            <>
              {blogData &&
                blogData.slice(0, 8).map((blog) => (
                  <div className="ProductCard" key={blog._id}>
                    <ProductImage src={blog.image} alt={blog.title} />
                    <ProductName>{blog.title}</ProductName>
                    <PostExcerpt>{blog.excerpt}</PostExcerpt>
                    <Link to={`/blog/${blog._id}`}>
                      <CTAButton>Read More</CTAButton>
                    </Link>
                  </div>
                ))}
            </>
          )}
        </div>
      </Section>
      <Section></Section>
      <Section>
        <SectionTitle>Customer Reviews</SectionTitle>
        <ReviewList>
          {/* Add customer reviews here */}
          <Review>
            <ReviewText>"Great product! Highly recommended."</ReviewText>
            <ReviewAuthor>- Jane Doe</ReviewAuthor>
          </Review>
          {/* Repeat Review for more reviews */}
        </ReviewList>
      </Section>
      <Section>
        <SectionTitle>Subscribe to Our Newsletter</SectionTitle>
        <NewsletterForm onSubmit={handleEmailSubmit}>
          <NewsletterInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <CTAButton type="submit">Subscribe</CTAButton>
        </NewsletterForm>
      </Section>
    </div>
  );
};

const ProductAuthor = styled.div`
  font-size: 1rem;
  color: #555;
`;
const PostExcerpt = styled.p`
  font-size: 1rem;
  color: #555;
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

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
`;
const ProductDesc = styled.h3`
  font-size: 1.2rem;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #007bff;
`;

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Review = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  width: 80%;
  text-align: center;
`;

const ReviewText = styled.p`
  font-size: 1rem;
`;

const ReviewAuthor = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const NewsletterForm = styled.form`
  margin: 0;
  padding: 1em 0;
  border: 1px dotted red;
`;

const NewsletterInput = styled.input`
  padding: 0.5em;
  margin-top: 0.5em;
  border: 1px solid #2a80fa;
  border-radius: 0.25em;
  font-style: italic;
  color: #737373;
  background-color: #fff;
  /* override the "hiding" properties: */
  position: static;
  width: auto;
  height: auto;
  crop: none;
`;

export default Home;

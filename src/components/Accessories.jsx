import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import Computers from "./Computers";
import { useDispatch, useSelector } from "react-redux";
import Electronics from "./Electronics";
import { useState } from "react";
import styled from "styled-components";
import { addToCart } from "../features/cartSlice";
import { IoReturnUpBack } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoLogoElectron } from "react-icons/io5";

const Accessories = () => {
  const { items: prodData, status } = useSelector((state) => state.products);
  const accessories = [
    { id: 1, name: "Accessory 1", price: 50, image: "/images/lcd.png" },
    { id: 2, name: "Accessory 2", price: 75, image: "/images/cash.png" },
    { id: 3, name: "Accessory 3", price: 100, image: "/images/bgm.png" }
    // Add more accessories here
  ];
  const [searchCategory, setSearchCategory] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const handleCategoryChange = (e) => {
    setSearchCategory(e.target.value);
  };

  const renderProducts = (category) => {
    return (
      <ProductsGrid>
        {" "}
        {status === "success" ? (
          prodData
            .filter((product) => product.type === category)
            .map((product) => (
              <ProductCard key={product._id}>
                {" "}
                <ProductImage src={product.image.url} alt={product.name} />{" "}
                <ProductName>{product.name}</ProductName>{" "}
                <ProductDesc>{product.desc}</ProductDesc>{" "}
                <ProductPrice>R{product.price}</ProductPrice>{" "}
                <CTAButton onClick={() => handleAddToCart(product)}>
                  Add to Cart
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
        <Nav>
          <NavItem to="/">
            <IoReturnUpBack />
          </NavItem>
        </Nav>
      </Header>
      <Hero>
        <HeroImage src="/images/accessories.jpg" alt="Hero" />
        <HeroText>
          <h1>Accessorize Your Life</h1>
          <p>Discover the best accessories to complement your style</p>
          <br />
          <NavItem to="/accessories/computers">
            Computers <FaComputer />
          </NavItem>
          <br />
          <br />
          <NavItem to="/accessories/phones">
            Phones <MdOutlinePhoneIphone />
          </NavItem>

          <br />
          <br />
          <NavItem to="/electronics">
            Electronics
            <IoLogoElectron />
          </NavItem>
        </HeroText>
      </Hero>
      <Section>
        <>
          <option value="">Select Search Category</option>
          <option value="products">Products</option>
          <option value="blogs">Blogs</option>
          <option value="books">Books</option>
          <option value="sculptures">Sculptures</option>
        </>
      </Section>
      <Section>
        {" "}
        <SectionTitle>Computers</SectionTitle> {renderProducts("computers")}{" "}
      </Section>{" "}
      <Section>
        {" "}
        <SectionTitle>Phones</SectionTitle> {renderProducts("phones")}{" "}
      </Section>{" "}
      <Section>
        {" "}
        <SectionTitle>Electronics</SectionTitle> {renderProducts("electronics")}{" "}
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

const ProductDesc = styled.h3`
  font-size: 1.2rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #d64550;
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

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #007bff;
`;

export default Accessories;

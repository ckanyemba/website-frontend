import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "../features/authSlice";
import { toast } from "react-toastify";
import HamburgerMenu from "./HamburgerMenu";
import Countdown from "./tools/Countdown";

const Computers = () => {
  const monitorPath = process.env.PUBLIC_URL + "/images/bgm.png";
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
      <div className="products-container">
        <aside>
          <h3>Categories</h3>
          <ul>
            <li onClick={() => handleCategoryChange("All")}>All</li>
            <li onClick={() => handleCategoryChange("Books")}>Books</li>
            <li onClick={() => handleCategoryChange("Electronics")}>
              Electronics
            </li>
            <li onClick={() => handleCategoryChange("Fashion")}>Fashion</li>
            <li onClick={() => handleCategoryChange("Home")}>Home</li>
          </ul>
          <h3>Price Range</h3>
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            value={priceRange.join(",")}
            onChange={handlePriceRangeChange}
          />
          <span>{`R${priceRange[0]} - R${priceRange[1]}`}</span>
        </aside>
      </div>
      <div className="main-content">
        <h2>Monitors</h2>
        <img src={monitorPath} alt="Logo" className="logo" />
        <ul>
          <li>
            <Link to="/computers/monitors">Monitors</Link>
          </li>
          <li>
            <Link to="/computers/cpu">CPU</Link>
          </li>
          <li>
            <Link to="/computers/laptops">Laptops</Link>
          </li>
          <li>
            <Link to="/computers/accessories">Accessories</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Computers;

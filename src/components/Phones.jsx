import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Phones = () => {
  const cashPath = process.env.PUBLIC_URL + "/images/cash.png";
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
      <div className="sidebar">
        <aside>
          <h3>Categories</h3>
          <ul>
            <li onClick={() => handleCategoryChange("All")}>All</li>
            <li onClick={() => handleCategoryChange("Tablets")}>Tablets</li>
            <li onClick={() => handleCategoryChange("Phones")}>Phones</li>
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
        <h2>All-in-ones</h2>
        <img src={cashPath} alt="Logo" className="logo" />
        <ul></ul>
      </div>
    </div>
  );
};

export default Phones;

import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "../features/authSlice";
import { toast } from "react-toastify";
import HamburgerMenu from "./HamburgerMenu";
import Countdown from "./tools/Countdown";

const Electronics = () => {
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
    <div className="layout">
      <div className="sidebar">
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
        <h2>All-in-ones</h2>
        <img src={cashPath} alt="Logo" className="logo" />
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

export default Electronics;

/*
Claire Huxtable

elevisions
Types: LED, OLED, QLED, Smart TVs
Features: Streaming capabilities, 4K/8K resolution, HDR support
B. Smartphones and Tablets
Examples: iPhone, Samsung Galaxy, iPad
Features: Touchscreens, internet connectivity, app ecosystems
C. Computers and Laptops
Types: Desktops, laptops, all-in-ones
Features: Various operating systems (Windows, macOS, Linux), gaming capabilities, productivity software
D. Audio Devices
Examples: Headphones, speakers, soundbars
Features: Bluetooth connectivity, noise cancellation, surround sound
E. Wearable Technology
Examples: Smartwatches, fitness trackers
Features: Health monitoring, notifications, GPS tracking
F. Home Appliances
Examples: Refrigerators, washing machines, microwaves
Features: Smart home integration, energy efficiency, automation
G. Video Game Consoles
Examples: PlayStation, Xbox, Nintendo Switch
Features: Online multiplayer, virtual reality support, extensive game libraries
H. Cameras and Camcorders
Examples: DSLRs, mirrorless cameras, action cameras
Features: High-resolution imaging, video recording capabilities, interchangeable lenses
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "../features/authSlice";
import { toast } from "react-toastify";
import HamburgerMenu from "./HamburgerMenu";
import Countdown from "./tools/Countdown";

const Search = () => {
  const logoPath = process.env.PUBLIC_URL + "/images/ogo.svg";
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (event) => {
    const { value } = event.target;
    const [min, max] = value.split(',').map(Number);
    setPriceRange([min, max]);
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <h3>Categories</h3>
        <ul>
          <li onClick={() => handleCategoryChange('All')}>All</li>
          <li onClick={() => handleCategoryChange('Books')}>Books</li>
          <li onClick={() => handleCategoryChange('Electronics')}>Electronics</li>
          <li onClick={() => handleCategoryChange('Fashion')}>Fashion</li>
          <li onClick={() => handleCategoryChange('Home')}>Home</li>
        </ul>
        <h3>Price Range</h3>
        <input 
          type="range" 
          min="0" 
          max="1000" 
          step="50" 
          value={priceRange.join(',')} 
          onChange={handlePriceRangeChange} 
        />
        <span>{`R${priceRange[0]} - R${priceRange[1]}`}</span>
      </aside>
      <main className="main-content">
        <nav className="search">
          <img src={logoPath} alt="Logo" className="logo" />

          <ul className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
          </ul>
          <div>
            <Countdown initialMinutes={1} />
          </div>
        </nav>
        <div>
          {/* Your existing content or product display logic 
          </div>
          </main>
        </div>
      );
    };
    
    export default Search;
*/

import React from 'react';

const HamburgerMenu = ({ isOpen, toggle }) => (
 <div onClick={toggle} className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
   <div className="line"></div>
   <div className="line"></div>
   <div className="line"></div>
 </div>
);

export default HamburgerMenu;

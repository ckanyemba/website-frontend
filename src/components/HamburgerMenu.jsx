import React from "react";
import styled from "styled-components";

const HamburgerMenu = ({ isOpen, toggle }) => (
  <MenuWrapper onClick={toggle} isOpen={isOpen}>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </MenuWrapper>
);

export default HamburgerMenu;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 20px;
  cursor: pointer;

  .line {
    width: 100%;
    height: 2px;
    background-color: #000;
    transition: all 0.3s ease;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    .line:nth-child(1) {
      transform: rotate(45deg) translateY(6px);
    }
    .line:nth-child(2) {
      opacity: 0;
    }
    .line:nth-child(3) {
      transform: rotate(-45deg) translateY(-6px);
    }
  `}
`;

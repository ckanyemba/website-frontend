import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  height: 100%;
`;

const CategoryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  margin: 15px 0;

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;

    &:hover {
      color: #007bff;
    }
  }
`;

const RangeList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

const RangeItem = styled.li`
  margin: 10px 0;

  a {
    text-decoration: none;
    color: #333;

    &:hover {
      color: #007bff;
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h2>Categories</h2>
      <CategoryList>
        <CategoryItem>
          <Link to="/category1">Category 1</Link>
        </CategoryItem>
        <CategoryItem>
          <Link to="/category2">Category 2</Link>
        </CategoryItem>
        <CategoryItem>
          <Link to="/category3">Category 3</Link>
        </CategoryItem>
      </CategoryList>

      <h2>Ranges</h2>
      <RangeList>
        <RangeItem>
          <Link to="/range1">Range 1</Link>
        </RangeItem>
        <RangeItem>
          <Link to="/range2">Range 2</Link>
        </RangeItem>
        <RangeItem>
          <Link to="/range3">Range 3</Link>
        </RangeItem>
      </RangeList>
    </SidebarContainer>
  );
};

export default Sidebar;

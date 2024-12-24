import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "../features/authSlice";
import { toast } from "react-toastify";
import HamburgerMenu from "./HamburgerMenu";
import { IoCloseSharp } from "react-icons/io5";
import { MdPersonPin } from "react-icons/md";

const MenuBar = () => {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Header>
        <HamburgerMenu isOpen={isOpen} toggle={toggle} />
        <NavLinks isOpen={isOpen}>
          <NavLink>
            <Link to="/">HOME</Link>
          </NavLink>
          <NavLink>
            <Link to="/accessories">ACCESSORIES</Link>
          </NavLink>
          <NavLink>
            <Link to="/books">BOOKS</Link>
          </NavLink>
          <NavLink>
            <Link to="/tracking">TRACKING</Link>
          </NavLink>
          <NavLink>
            <Link to="/shop">SHOP</Link>
          </NavLink>
        </NavLinks>
      </Header>
      <Sidebar isOpen={isOpen}>
        <CloseSharp onClick={toggle}>
          <IoCloseSharp />
        </CloseSharp>
        <SidebarLink>
          Hello, Welcome
          <br />
          <Link to="login">Login</Link>
          <MdPersonPin />
        </SidebarLink>
        <SidebarLink>
          <Link to="/">HOME</Link>
        </SidebarLink>
        <SidebarLink>
          <Link to="/accessories">ACCESSORIES</Link>
        </SidebarLink>
        <SidebarLink>
          <Link to="/books">BOOKS</Link>
        </SidebarLink>
        <SidebarLink>
          <Link to="/tracking">TRACKING</Link>
        </SidebarLink>
        <SidebarLink>
          <Link to="/range">SHOP</Link>
        </SidebarLink>
      </Sidebar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 50px;
  margin: 0 auto;
  padding: 20px;
  background-color: #1f0d4a;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  padding: 20px 0;
`;

const NavLinks = styled.div`
  flex: 1;
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  justify-content: space-around;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.div`
  margin: 10px 0;
  a {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #ccc;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #1d0a4a;
  padding: 1rem;
  box-shadow: ${({ isOpen }) =>
    isOpen ? "2px 0 5px rgba(0, 0, 0, 0.3)" : "none"};
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease;
  z-index: 1000;
`;

const SidebarLink = styled.div`
  padding: 1rem;
  margin: 20px 0;
  a {
    display: block;
    font-size: 1rem;
    color: #ccc;
    text-decoration: none;
  }
`;
const CloseSharp = styled.div`
  display: flex;
  align-items: right;
  color: #ccc;
`;

export default MenuBar;

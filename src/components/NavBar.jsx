import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "../features/authSlice";
import { productsSearch } from "../features/productsSlice";
import { toast } from "react-toastify";
import HamburgerMenu from "./HamburgerMenu";
import MenuBar from "./MenuBar";
import CurrencySelector from "./tools/CurrencySelector";
import CountrySelector from "./tools/CountrySelector";
import Countdown from "./tools/Countdown";
import { FaAngleDown } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const NavBar = () => {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // Add state for search term
  const toggle = () => setIsOpen(!isOpen);
  const [country, setCountry] = useState("South Africa");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    // Handle country change logic here
  };
  const handleSearch = () => {
    dispatch(productsSearch({ name: searchTerm }));
  };

  return (
    <>
      <Container>
        <Header>
          <SearchMenu>
            <SearchBar>
              <Link to="/search">
                <SearchBarInput
                  type="text"
                  placeholder="books, craig kanyemba, 400.."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Link>
              <CTAButton type="button" onClick={handleSearch}>
                <Link to="/search">
                  {" "}
                  <h1>Search</h1>{" "}
                </Link>
              </CTAButton>{" "}
            </SearchBar>
          </SearchMenu>
          <NavLinks>
            <NavLink>
              <Link to="https://wa.me/27639236774">
                <FaWhatsapp />
              </Link>

              <Link to="/help">
                <a>Help</a>
              </Link>
            </NavLink>
            <NavLink>
              <Link to="/blogs">
                <a>Blog</a>
              </Link>
            </NavLink>
            {auth._id ? (
              <>
                {auth.isAdmin && (
                  <NavLink>
                    <Link to="/admin/summary">
                      <a>Admin</a>
                    </Link>
                  </NavLink>
                )}
                <NavLink
                  onClick={() => {
                    dispatch(logoutUser(null));
                    toast.warning("Logged out!", { position: "bottom-left" });
                  }}
                >
                  <a>Logout</a>
                </NavLink>
              </>
            ) : (
              <NavLink>
                <Link to="/login">
                  <a>Login</a>
                </Link>
              </NavLink>
            )}
            <NavLink>
              <Link to="/cart">
                <span>
                  <a>My baskets</a>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-handbag-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                </svg>
                {cartTotalQuantity}
              </Link>
            </NavLink>
            <NavLink>
              <CurrencySelector />
            </NavLink>
          </NavLinks>
        </Header>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 50px;
  margin: 0 auto;
  padding: 20px;
  background-color: #7b4de8;
`;
const CountrySelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`;
const Hero = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const HeroImage = styled.img`
  width: 25%;
  height: 45px;
`;
const SearchMenu = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  padding: 1rem;
`;
const CTAButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #1c2826;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 3px;
  h1 {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #ccc;
  }
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;
const SearchBarInput = styled.input`
  padding: 1.2rem;
  font-size: 1rem; /* Ensuring the search text is the biggest */
  border: 1px solid #3d3636;
  border-radius: 4px;
  width: 900px;
  height: 20px;
  outline: none;
  margin-right: 0.5rem;
`;
const NavLinks = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
  a {
    display: flex;
    align-items: center;
    font-size: 0.6rem;
    color: #fc9780;
  }
`;
const Select = styled.select`
  padding: 5px;
  font-size: 1rem;
`;
const NavLink = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export default NavBar;

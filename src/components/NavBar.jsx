import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "../features/authSlice";
import { toast } from "react-toastify";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="nav-bar">
      <div className="nav-heading">
        <Link to="/">Paperback</Link>
        <Link to="/street-and-thrift-wear">Audiobooks</Link>
        <Link to="/jewellery-wear">Ebooks</Link>
        <Link to="/shoe-wear">shoe collection</Link>
        <Link to="/about">founders of SSS</Link>
        <Link to="/contact">get in contact</Link>
      </div>
      <div>
        {auth._id ? (
          <Links>
            {auth.isAdmin ? (
              <div>
                <Link to="/admin/summary">Admin</Link>
              </div>
            ) : null}
            <div
              onClick={() => {
                dispatch(logoutUser(null));
                toast.warning("Logged out!", { position: "bottom-left" });
              }}
            >
              Logout
            </div>
          </Links>
        ) : (
          <AuthLinks>
            <Link to="/login">
              <h6>LOGIN</h6>
            </Link>
            <Link to="/register">
              <h6>REGISTER</h6>
            </Link>
          </AuthLinks>
        )}
      </div>

      <div className="nav-bag">
        <Link to="/cart">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-handbag-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0  1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
            </svg>
            <span className="bag-quantity">
              <span>{cartTotalQuantity}</span>
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

const AuthLinks = styled.div`
  a {
    &:last-child {
      margin-left: 2rem;
    }
  }
`;

const Links = styled.div`
  color: white;
  display: flex;

  div {
    cursor: pointer;

    &:last-child {
      margin-left: 2rem;
    }
  }
`;

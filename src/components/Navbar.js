import React from "react";
import styled from "styled-components";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSidebarContext } from "../context/sidebar_context";
import { useCartContext } from "../context/cart_context";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { total_items } = useCartContext();
  const { openSidebar } = useSidebarContext();
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0(); // Auth0 hooks

  return (
    <NavbarWrapper className="bg-white flex">
      <div className="container w-100">
        <div className="brand-and-toggler flex flex-between w-100">
          <Link to="/" className="navbar-brand text-uppercase ls-1 fw-8">
            <span>Course</span>Zone
          </Link>

          {isAuthenticated ? (
            // If the user is authenticated, display user information and a logout button
            <>
              <button
                type="button"
                className="logout-btn"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </button>

              <img className="user-image"
               
                src={user.picture}
                alt={user.name}
              />
            </>
          ) : (
            // If the user is not authenticated, display a login button
            <button
              type="button"
              onClick={() => loginWithRedirect()}
              className="login-btn"
            >
              Get Started
            </button>
          )}

          {isAuthenticated && (
            <div className="navbar-btns flex">
              <Link to="/cart" className="cart-btn">
                <MdShoppingCart />
                <span className="item-count-badge">{total_items}</span>
              </Link>
              <button
                type="button"
                className="sidebar-open-btn"
                onClick={() => openSidebar()}
              >
                <MdMenu />
              </button>
            </div>
          )}
        </div>
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px,
    rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .navbar-brand {
    font-size: 23px;
    span {
      color: var(--clr-orange);
    }
  }
  .cart-btn {
    margin-right: 18px;
    font-size: 23px;
    position: relative;
    .item-count-badge {
      background-color: var(--clr-orange);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .sidebar-open-btn {
    transition: all 300ms ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }

  .login-btn,
  .logout-btn {
    background-color: var(--clr-orange);
    color: var(--clr-white);
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
  }
  .logout-btn {
    margin-right: 22rem;
    position: absolute;
    right: 12px;
    top: 12px;
  }

  .user-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 35rem;
    position: absolute;
    right: 0;
    top: 12px;
  }

  @media screen and (max-width: 768px) {
    .logout-btn {
      margin-right: 8rem;
      right: 1rem;
      position: absolute;
      top: 2rem;
    }

    .logout-btn,
    .login-btn {
      font-size: 14px;
      padding: 8px 16px;
    }

    .user-image {
      width: 30px;
      height: 30px;
      right: 1rem;
      margin-right: 17rem;
      position: absolute;
      top: 2rem;
    }
  }
`;

export default Navbar;

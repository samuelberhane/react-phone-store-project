import React from "react";
import { Link } from "react-router-dom";
import { useGlobalPhoneContext } from "../context/PhoneContext";

const Navbar = () => {
  const { cart } = useGlobalPhoneContext();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav">
          <Link to="/">
            <h1 className="nav-logo">Digital House</h1>
          </Link>
          <ul className="links">
            <Link to="/cart" className="cart-logo">
              My Cart &nbsp;
              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
              <sup>{cart.length}</sup>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

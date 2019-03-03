import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  box-shadow: 0px 2px 4px gray;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  a {
    font-weight: 600;
    text-decoration: none;
    color: #007aff;

    margin: 0 0.5rem;
  }
  .brand {
    margin-right: auto;
    font-size: 1.5rem;
    color: #222;
  }
`;

const Navbar = () => (
  <Nav>
    <Link to="/" className="brand">
      Fit Future
    </Link>
    <Link to="/">Home</Link>
    <Link to="/history">History</Link>
    <Link to="/results">Products</Link>
  </Nav>
);

export default Navbar;

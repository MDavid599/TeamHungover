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
  z-index: 999;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  a {
    margin: 0 0.5rem;
  }
  .brand {
    margin-right: auto;
    font-size: 1.5rem;
    color: #222;
  }

  .more {
    display: inherit;
    border: none;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0);
    font-weight: 600;
  }
  .menu-links {
    display: none;
  }
  .expanded {
    display: flex;
    position: absolute;
    top: 2rem;
    right: 1rem;
    flex-direction: column;
    background-color: #fdfdfd;
    box-shadow: 2px 2px 2px gray;
    padding: 2rem;
  }

  @media (min-width: 800px) {
    .more {
      display: none;
    }

    .menu-links {
      display: initial;
      position: initial;
      box-shadow: none;
      padding: initial;
    }
  }
`;

class Navbar extends React.Component {
  state = {
    expanded: false
  };
  toggleExpanded = () => {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  };
  render() {
    const { expanded } = this.state;
    return (
      <Nav>
        <Link to="/" className="brand">
          Fit Future
        </Link>
        <button href="#" className="more" onClick={this.toggleExpanded}>
          More
        </button>
        <ul className={`menu-links ${expanded ? "expanded" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
          <Link to="/measure">Add Measurement</Link>
          <Link to="/results">Products</Link>
          <Link to="/signup">Sign up</Link>
        </ul>
      </Nav>
    );
  }
}

export default Navbar;

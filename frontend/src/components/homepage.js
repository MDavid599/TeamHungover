import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "./styles/container";
import headerImg from "../static/header.jpg";
import Button from "./styles/button";
import Row from "./styles/row";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${headerImg});
  background-size: cover;
  color: #eee;
  .link-button {
    cursor: pointer;
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Homepage = () => (
  <Wrapper>
    <Container>
      <Cover>
        <h1>Welcome to Fit Future</h1>
        <p>A site to help you pick clothing for the future you</p>
        <Row>
          <Link to="/signup">
            <Button role="link" className="link-button">
              Create Account
            </Button>
          </Link>
          <Link to="/login">
            <Button role="link" className="link-button">
              Login
            </Button>
          </Link>
        </Row>
      </Cover>
    </Container>
  </Wrapper>
);

export default Homepage;

import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Container from "./styles/container";
import Button from "./styles/button";

const Wrapper = styled(Container)`
  text-align: center;
  .link-button {
    cursor: pointer;
  }
`;

const NotFound = props => (
  <Wrapper>
    <h1>Couldn't find a page at "{props.location.pathname}"</h1>
    <Link to="/">
      <Button role="link" className="link-button">
        Go back home
      </Button>
    </Link>
  </Wrapper>
);

export default withRouter(NotFound);

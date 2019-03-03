import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-weight: 600;
  padding: 1rem;
  background-color: ${props =>
    props.success ? "rgba(0, 255, 0, 0.5)" : "rgba(255, 0, 0, 0.5)"};
  border-radius: 1rem;
  margin: 1rem auto;
`;

const Error = props => {
  if (!props.error) return null;
  return <Wrapper success={props.success}>{props.error}</Wrapper>;
};

Error.defaultProps = {
  success: false
};

export default Error;

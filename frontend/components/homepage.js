import React from "react";
import Container from "./styles/container";
import Select from "./select";

const Homepage = () => (
  <Container>
    <h1>Find your perfect size:</h1>
    <Select options={["Male", "Female"]} />
  </Container>
);

export default Homepage;

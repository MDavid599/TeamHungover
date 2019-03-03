import React from "react";
import styled from "styled-components";
import Container from "./styles/container";
import Select from "./select";
import Form from "./styles/form";
import TextInput from "./text-input";
import Button from "./styles/button";

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "left"
    "right";
  .left {
    grid-area: left;
  }
  .right {
    grid-area: right;
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "left right";
  }
  .form-label {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

const Homepage = () => (
  <Container>
    <Wrapper>
      <div className="right">
        <h1>Find your perfect size:</h1>
        <Form>
          <fieldset>
            <label>
              <span className="form-label">Gender:</span>
              <Select options={["Male", "Female"]} />
            </label>
            <TextInput
              placeholderText="Bust size in inches"
              labelText="Bust/Chest:"
            />
            <TextInput
              placeholderText="Waist size in inches"
              labelText="Waist:"
            />
            <TextInput placeholderText="Hip size in inches" labelText="Hips:" />
            <Button>Show matching products</Button>
          </fieldset>
        </Form>
      </div>
    </Wrapper>
  </Container>
);

export default Homepage;

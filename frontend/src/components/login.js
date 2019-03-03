import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "./styles/container";
import Button from "./styles/button";
import Form from "./styles/form";
import Label from "./styles/text-input";

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;

  .centered {
    text-align: center;
  }
`;

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name + " " + value);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit && this.props.onSubmit(this.state);
  };

  render() {
    return (
      <Container>
        <Wrapper>
          <Form onSubmit={this.handleSubmit}>
            <h1>Sign in</h1>
            <fieldset>
              <Label>
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="email@mail.sfsu.edu"
                  value={this.state.email}
                  onChange={this.changeHandler}
                />
              </Label>
              <Label>
                Password:
                <input
                  type="password"
                  name="password"
                  placeholder="hunter2"
                  value={this.state.password}
                  onChange={this.changeHandler}
                />
              </Label>
              <Button type="submit">Sign in</Button>
            </fieldset>
            <p className="centered">
              Don't have an account yet? <Link to="/signup">Sign up here</Link>
            </p>
          </Form>
        </Wrapper>
      </Container>
    );
  }
}

export default Login;

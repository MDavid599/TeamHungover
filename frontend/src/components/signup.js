import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Button from "./styles/button";
import Container from "./styles/container";
import Form from "./styles/form";
import Label from "./styles/text-input";

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;

  .centered {
    text-align: center;
  }
`;

class Signup extends React.Component {
  state = {
    name: "",
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
    this.props.history.push("/measure");
  };

  render() {
    return (
      <Container>
        <Wrapper>
          <Form onSubmit={this.handleSubmit}>
            <h1>Sign up</h1>
            <fieldset>
              <Label>
                Name:
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={this.state.name}
                  onChange={this.changeHandler}
                />
              </Label>
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
              <Button type="submit">Submit</Button>
            </fieldset>
            <p className="centered">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </Form>
        </Wrapper>
      </Container>
    );
  }
}

export default withRouter(Signup);

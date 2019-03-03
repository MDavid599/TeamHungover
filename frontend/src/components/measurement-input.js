import React from "react";
import styled from "styled-components";
import { Spring, animated } from "react-spring/renderprops";
import { connect } from "react-redux";
import { addMeasurement } from "../redux/measurements";
import Container from "./styles/container";
import BodyRepresentation from "./body";
import MeasurementForm from "./measurement-form";
import Error from "./error";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    "left"
    "right";
  .left {
    grid-area: left;
    display: none;
  }
  .right {
    grid-area: right;
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "left right";
    .left {
      display: inherit;
    }
  }
  .form-label {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

class MeasureInput extends React.Component {
  state = {
    bust: 0,
    waist: 0,
    hips: 0,
    gender: "Male",
    successMessage: null,
    error: null
  };
  handleFormChange = state => {
    this.setState(state);
  };
  handleFormSubmit = state => {
    this.props.addMeasurement(state);
    this.setState({ successMessage: "Measurement Logged!" });
  };
  render() {
    const { bust, waist, hips } = this.state;
    const radii = [bust, waist, hips];
    return (
      <Container>
        <Error error={this.state.error} />
        <Error error={this.state.successMessage} success />
        <Wrapper>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} native>
            {props => (
              <animated.div className="left" style={props}>
                <BodyRepresentation radii={radii} />
              </animated.div>
            )}
          </Spring>
          <Spring
            from={{ opacity: 0, transform: "translateY(50px)" }}
            to={{ opacity: 1, transform: "translateY(0px)" }}
          >
            {props => (
              <animated.div className="right" style={props} native>
                <MeasurementForm
                  onSubmit={this.handleFormSubmit}
                  onChange={this.handleFormChange}
                />
              </animated.div>
            )}
          </Spring>
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = ({ measurements }) => ({
  measurements
});

const mapDispatchToProps = { addMeasurement };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeasureInput);

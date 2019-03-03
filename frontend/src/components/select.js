import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Row from "./styles/row";

class Select extends React.Component {
  static propTypes = {
    options: PropTypes.array,
    onChange: PropTypes.func
  };
  state = {
    selected: 0
  };
  radioButtonClicked = index => {
    this.setState({ selected: index });
    this.props.onChange && this.props.onChange(this.props.options[index]);
  };
  render() {
    const { selected } = this.state;
    const { options } = this.props;
    return (
      <>
        {options ? (
          <Row>
            {options.map((option, index) => (
              <Radio
                selected={index === selected}
                onClick={this.radioButtonClicked.bind(this, index)}
              >
                {option}
              </Radio>
            ))}
          </Row>
        ) : (
          <p> no options</p>
        )}
      </>
    );
  }
}

const Radio = styled.div`
  color: #fff;
  font-weight: 600;
  background: ${props =>
    props.selected ? "linear-gradient(#04e384, #25cdc5)" : "#777"};
  padding: 1rem 1.5rem;
  margin: 0.2rem;
  border-radius: 2rem;
  /* transform: skewX(-20deg); */
`;

export default Select;

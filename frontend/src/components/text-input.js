import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Label = styled.label`
  input {
    display: block;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 0.2rem;
    border: 1px lightgray solid;
    font-size: 1rem;
    width: 100%;
  }
`;

/**
 * All props are passed to the input
 */
class TextInput extends React.Component {
  static propTypes = {
    labelText: PropTypes.string
  };
  state = {
    value: ""
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    const { placeholderText, labelText, ...rest } = this.props;
    return (
      <Label>
        {labelText}
        <input
          type="text"
          placeholder={placeholderText}
          onChange={this.handleChange}
          {...rest}
        />
      </Label>
    );
  }
}

export default TextInput;

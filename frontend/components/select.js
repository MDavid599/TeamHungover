import React from "react";
import PropTypes from "prop-types";

class Select extends React.Component {
  static propTypes = {
    options: PropTypes.array
  };
  state = {
    selected: 0
  };
  radioButtonClicked = (e, index) => {
    this.setState({ selected: index });
  };
  render() {
    const { selected } = this.state;
    const { options } = this.props;
    return (
      <>
        {options ? (
          options.map(
            (option, index) =>
              console.log(index) || (
                <label>
                  {option}
                  <input
                    type="radio"
                    checked={index === selected}
                    onChange={this.radioButtonClicked.bind(this, index)}
                  />
                </label>
              )
          )
        ) : (
          <p> no options</p>
        )}
      </>
    );
  }
}

export default Select;

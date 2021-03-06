import React from "react";
import mapValues from "lodash/mapValues";
import PropTypes from "prop-types";
import Select from "./select";
import Form from "./styles/form";
import TextInput from "./styles/text-input";
import Button from "./styles/button";

class MeasurementForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number
  };
  static defaultProps = {
    min: 24,
    max: 54
  };
  state = {
    bust: "",
    waist: "",
    hips: "",
    gender: "Male"
  };
  handleInputFieldChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      const state = this.processState(this.state);
      this.props.onChange && this.props.onChange(state);
    });
  };
  processState = state => {
    let values = mapValues(state, value => parseInt(value) || 0);
    values["gender"] = state.gender;
    return values;
  };
  handleSelectChange = newOption => {
    this.setState({ gender: newOption }, () => {
      const state = this.processState(this.state);
      this.props.onChange && this.props.onChange(state);
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const state = this.processState(this.state);
    this.props.onSubmit && this.props.onSubmit(state);
  };
  render() {
    const { min, max } = this.props;
    const { bust, waist, hips } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Find your perfect size:</h1>
        <fieldset>
          <label>
            <span className="form-label">Gender:</span>
            <Select
              options={["Male", "Female"]}
              onChange={this.handleSelectChange}
            />
          </label>
          <TextInput>
            Bust/Chest:
            <input
              placeholder="Bust size in inches"
              name="bust"
              type="number"
              step="1"
              min="0"
              onChange={this.handleInputFieldChange}
              value={bust}
            />
          </TextInput>
          <input
            type="range"
            min={min}
            max={max}
            name="bust"
            onChange={this.handleInputFieldChange}
            value={bust}
          />
          <TextInput>
            Waist:
            <input
              name="waist"
              type="number"
              step="1"
              min="0"
              placeholder="Waist size in inches"
              onChange={this.handleInputFieldChange}
              value={waist}
            />
          </TextInput>
          <input
            type="range"
            min={min}
            max={max}
            value={waist}
            name="waist"
            onChange={this.handleInputFieldChange}
          />
          <TextInput>
            Hips:
            <input
              placeholder="Hip size in inches"
              name="hips"
              type="number"
              step="1"
              min="0"
              onChange={this.handleInputFieldChange}
              value={hips}
            />
          </TextInput>
          <input
            type="range"
            min={min}
            max={max}
            value={hips}
            name="hips"
            onChange={this.handleInputFieldChange}
          />
          <Button type="submit">Show matching products</Button>
        </fieldset>
      </Form>
    );
  }
}

export default MeasurementForm;

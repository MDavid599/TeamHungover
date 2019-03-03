import React from "react";
import mapValues from "lodash/mapValues";
import PropTypes from "prop-types";
import Select from "./select";
import Form from "./styles/form";
import TextInput from "./text-input";
import Button from "./styles/button";

class MeasurementForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func
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
          <TextInput
            placeholder="Bust size in inches"
            labelText="Bust/Chest:"
            name="bust"
            type="number"
            step="1"
            min="0"
            onChange={this.handleInputFieldChange}
          />
          <TextInput
            placeholder="Waist size in inches"
            labelText="Waist:"
            name="waist"
            type="number"
            step="1"
            min="0"
            onChange={this.handleInputFieldChange}
          />
          <TextInput
            placeholder="Hip size in inches"
            labelText="Hips:"
            name="hips"
            type="number"
            step="1"
            min="0"
            onChange={this.handleInputFieldChange}
          />
          <Button type="submit">Show matching products</Button>
        </fieldset>
      </Form>
    );
  }
}

export default MeasurementForm;

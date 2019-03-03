import React from "react";
import Container from "./styles/container";
import MeasurementsTable from "./measurement-table";
import MeasurementChart from "./measurement-chart";
import reverse from "lodash/reverse";
import { connect } from "react-redux";

class History extends React.Component {
  render() {
    const { measurements } = this.props;
    return (
      <Container>
        <h1>Measurement History:</h1>
        <MeasurementChart measurements={measurements} />
        <MeasurementsTable measurements={measurements} />
      </Container>
    );
  }
}

const mapStateToProps = ({ measurements }) => ({
  measurements: reverse(measurements.measurements)
});

export default connect(mapStateToProps)(History);

import React from "react";
import Container from "./styles/container";
import MeasurementsTable from "./measurement-table";
import MeasurementChart from "./measurement-chart";

const mockData = [
  { date: "12/1/19", bust: 30, waist: 28, hips: 32 },
  { date: "15/1/19", bust: 29, waist: 27, hips: 30 },
  { date: "31/1/19", bust: 31, waist: 29, hips: 32 },
  { date: "12/2/19", bust: 29, waist: 25, hips: 20 }
];

class History extends React.Component {
  render() {
    return (
      <Container>
        <h1>Measurement History:</h1>
        <MeasurementChart measurements={mockData} />
        <MeasurementsTable measurements={mockData} />
      </Container>
    );
  }
}

export default History;

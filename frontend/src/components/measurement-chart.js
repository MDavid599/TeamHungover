import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";

class MeasurementChart extends React.Component {
  static propTypes = {
    measurements: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        bust: PropTypes.string.isRequired,
        waist: PropTypes.string.isRequired,
        hips: PropTypes.string.isRequired
      })
    )
  };
  getDataSets = () => {
    const { measurements } = this.props;
    if (!measurements || measurements.length === 0)
      return { labels: [], busts: [], waists: [], hips: [] };
    const labels = measurements.map(datum => datum.date);
    const busts = measurements.map(datum => datum.bust);
    const waists = measurements.map(datum => datum.waist);
    const hips = measurements.map(datum => datum.hips);
    return { labels, busts, waists, hips };
  };

  render() {
    const dataSets = this.getDataSets();
    return (
      <Line
        data={{
          labels: dataSets.labels,
          datasets: [
            {
              label: "Bust/Chest",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "#00A8FF",
              data: dataSets.busts
            },
            {
              label: "Waist",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "#0FF5C3",
              data: dataSets.waists
            },
            {
              label: "Hips",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "#A036C6",
              data: dataSets.hips
            }
          ]
        }}
      />
    );
  }
}

export default MeasurementChart;

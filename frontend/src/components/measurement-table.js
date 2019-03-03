import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border: 1px #ddd solid;
  border-radius: 0.2rem;
  padding: 1rem;
  margin-top: 5rem;
  text-align: center;
  tr {
    margin: 0.2rem;
  }
  td {
    line-height: 2rem;
  }
`;

const MeasurementsTable = ({ measurements }) => (
  <Table>
    {measurements ? (
      <>
        <tr>
          <th>Date</th>
          <th>Bust/Chest</th>
          <th>Waist</th>
          <th>Hips</th>
        </tr>
        {measurements.map(measurement => (
          <tr>
            <td>{measurement.date}</td>
            <td>{measurement.bust}</td>
            <td>{measurement.waist}</td>
            <td>{measurement.hips}</td>
          </tr>
        ))}
      </>
    ) : (
      <p>No measurements</p>
    )}
  </Table>
);

MeasurementsTable.propTypes = {
  measurements: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      bust: PropTypes.string.isRequired,
      waist: PropTypes.string.isRequired,
      hips: PropTypes.string.isRequired
    })
  )
};

export default MeasurementsTable;

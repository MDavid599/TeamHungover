import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import max from "lodash/max";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  svg {
    display: block;
  }
`;

class Body extends React.Component {
  static propTypes = {
    radii: PropTypes.arrayOf(PropTypes.number),
    overlapRatio: PropTypes.number
  };
  static defaultProps = {
    overlapRatio: 0.75,
    radii: []
  };
  /**
   * Properly offsets circles for uniform distribution on screen.
   */
  getCircleYOffsets = () => {
    const { overlapRatio } = this.props;
    const radii = this.normalizedRadii();
    if (radii.length <= 1) return radii;
    let totalOffset = radii[0];
    let offsets = [];
    let previousRadius = radii[0] * overlapRatio;
    offsets.push(radii[0]);
    for (let i = 1; i < radii.length; i++) {
      const currentRadius = radii[i];
      totalOffset += currentRadius + previousRadius;
      offsets.push(totalOffset);
      previousRadius = currentRadius * overlapRatio;
    }
    return offsets;
  };
  normalizedRadii = () => {
    const { radii } = this.props;
    const maxRadius = max(radii);
    return radii.map(r => (r / maxRadius) * 100);
  };
  render() {
    let offsets = this.getCircleYOffsets();
    console.log(offsets);
    let radii = this.normalizedRadii();
    return (
      <Wrapper>
        <svg width="100%" height="100%">
          <linearGradient
            id="backgroundGradient"
            gradientTransform="rotate(90)"
          >
            <stop stopColor="#00A8FF" offset="0%" />
            <stop stopColor="#0FF5C3" offset="100%" />
          </linearGradient>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#backgroundGradient)"
            mask="url(#circle-mask)"
          />
          <mask id="circle-mask" x="0" y="0" width="100%" height="100%">
            {radii.map((radius, index) => (
              <circle
                cx="50%"
                cy={offsets[index]}
                stroke="black"
                r={radius}
                fill="white"
                strokeWidth="0"
              />
            ))}
          </mask>
        </svg>
      </Wrapper>
    );
  }
}

export default Body;

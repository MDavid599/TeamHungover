import React from "react";
import styled from "styled-components";
import Container from "./styles/container";
import Item from "./item";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: flex-end;
`;

class Results extends React.Component {
  render() {
    return (
      <Container>
        <h1>Results:</h1>
        <Wrapper>
          <Item
            title="An Item"
            photo="http://img.our-dress.com/images/dress/4967/Royal-Blue-Halter-Neckline-Asymmetrical-Full-Length-Pleated-Ball-Gown-Quinceanera-Dresses-SG2806-03.jpg"
            price="$120.00"
            size="S"
            link="https://www.google.com"
          />
          <Item
            title="An Item"
            photo="http://img.our-dress.com/images/dress/4967/Royal-Blue-Halter-Neckline-Asymmetrical-Full-Length-Pleated-Ball-Gown-Quinceanera-Dresses-SG2806-03.jpg"
            price="$120.00"
            size="S"
            link="https://www.google.com"
          />
          <Item
            title="An Item"
            photo="http://img.our-dress.com/images/dress/4967/Royal-Blue-Halter-Neckline-Asymmetrical-Full-Length-Pleated-Ball-Gown-Quinceanera-Dresses-SG2806-03.jpg"
            price="$120.00"
            size="S"
            link="https://www.google.com"
          />
          <Item
            title="An Item"
            photo="http://img.our-dress.com/images/dress/4967/Royal-Blue-Halter-Neckline-Asymmetrical-Full-Length-Pleated-Ball-Gown-Quinceanera-Dresses-SG2806-03.jpg"
            price="$120.00"
            size="S"
            link="https://www.google.com"
          />
          <Item
            title="An Item"
            photo="http://img.our-dress.com/images/dress/4967/Royal-Blue-Halter-Neckline-Asymmetrical-Full-Length-Pleated-Ball-Gown-Quinceanera-Dresses-SG2806-03.jpg"
            price="$120.00"
            size="S"
            link="https://www.google.com"
          />
        </Wrapper>
      </Container>
    );
  }
}

export default Results;

import React from "react";
import styled from "styled-components";
import Container from "./styles/container";
import Item from "./item";
import { connect } from "react-redux";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: flex-end;
`;

class Results extends React.Component {
  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <Container>
        <h1>Results:</h1>
        <Wrapper>
          {products.map(product => (
            <Item {...product} />
          ))}
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = ({ products }) => ({
  products: products.products
});

export default connect(mapStateToProps)(Results);

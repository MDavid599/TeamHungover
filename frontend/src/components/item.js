import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }

  img {
    margin: 1rem auto;
    max-width: 200px;
  }

  .price {
    color: green;
  }
`;

const Item = ({ title, photo, price, size, link }) => (
  <Wrapper>
    <a href={link}>
      <img src={photo} alt={title} />
    </a>
    <a href={link}>
      <strong className="title">{title}</strong>
    </a>
    <p>
      <span className="size">size: {size}</span> |
      <span className="price"> {price}</span>
    </p>
  </Wrapper>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Item;

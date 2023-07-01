import React from "react";
import { styled } from "styled-components";
const Container = styled.button`
  background-color: #5a2e98;
  color: white;
  border: none;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #66409b;
  }
`;
const Button = ({ name }) => {
  return <Container>{name}</Container>;
};

export default Button;

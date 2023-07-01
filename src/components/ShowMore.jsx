import React from "react";
import { styled } from "styled-components";
const Container = styled.div`
  position: relative;
`;
const More = styled.p`
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  position: absolute;
  color: white;
  height: 40px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  padding-left: 10px;
  background-color: #26262666;
  cursor: pointer;
`;

const ShowMore = (props) => {
  return (
    <Container>
      <More>Show More</More>
      {props.children}
    </Container>
  );
};

export default ShowMore;

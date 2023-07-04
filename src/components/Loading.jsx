import React from "react";
import { styled } from "styled-components";
import logo from "../assets/loading/loading.gif";
const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Gif = styled.img`
  width: 100px;
  height: 100px;
`;

const Loading = () => {
  return (
    <Container>
      <Gif src={logo} alt="wait until the page loads" />
    </Container>
  );
};

export default Loading;

import React from "react";
import { styled } from "styled-components";

const Container = styled.div``;
const Gif = styled.img`
  width: 200px;
  height: 200px;
`;

const Loading = () => {
  return (
    <Container>
      <Gif src="../assets/loading/pacman.gif" />
    </Container>
  );
};

export default Loading;

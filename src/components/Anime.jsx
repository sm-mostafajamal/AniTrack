import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: 150px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
  cursor: pointer;
`;
const ImageContainer = styled.div`
  overflow: hidden;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  overflow: hidden;
`;
const Top = styled.div``;
const Bottom = styled.div``;

const Title = styled.span``;
const Genre = styled.span``;
const Popularity = styled.span``;
const Rating = styled.span``;
const Voted = styled.span``;
const Anime = ({ anime }) => {
  return (
    <Container>
      <ImageContainer image={anime.images.jpg.large_image_url}>
        <Top></Top>
        <Bottom>
          <Title></Title>
          <Genre></Genre>
          <Popularity></Popularity>
          <Rating></Rating>
          <Voted></Voted>
        </Bottom>
      </ImageContainer>
    </Container>
  );
};

export default Anime;

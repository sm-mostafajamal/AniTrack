import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 40%;
  height: 200px;
  /* border-radius: 10px; */
  gap: 15px;
  /* overflow: hidden; */
  /* margin-bottom: 15px;
  cursor: pointer;
 */
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  background-color: teal;
  overflow: hidden;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
`;
const Wrapper = styled.div`
  flex: 2;
  height: 150px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;
const Title = styled.span``;
const Genre = styled.span``;
const Popularity = styled.span``;
const Rating = styled.span``;
const Voted = styled.span``;

const Anime = ({ anime }) => {
  return (
    <Container>
      <ImageContainer image={anime.images.jpg.large_image_url} />
      <Wrapper>
        <Title>One piece</Title>
        <Genre>Action</Genre>
        <Popularity>very</Popularity>
        <Rating>8.8</Rating>
        <Voted>5</Voted>
      </Wrapper>
    </Container>
  );
};

export default Anime;

import React, { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  width: 15%;
  height: 250px;
  gap: 10px;
  cursor: pointer;
  position: relative;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 80%;
  background-color: teal;
  overflow: hidden;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
`;
const Title = styled.span`
  width: 100%;

  font-size: 13px;
  font-weight: 500;
  color: #c3cdd5;
`;

const Details = styled.div`
  top: 0;
  left: 120px;
  width: 250px;
  height: 120px;
  /* background-color: #242424c9; */
  background-color: black;
  color: white;
  box-shadow: 0px 0px 14px 8px rgba(255, 255, 255, 0.19);
  -webkit-box-shadow: 0px 0px 14px 8px rgba(255, 255, 255, 0.19);
  -moz-box-shadow: 0px 0px 14px 8px rgba(255, 255, 255, 0.19);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-top: 15px;
  position: absolute;
  z-index: 1;
  padding-left: 20px;
  padding-top: 20px;
`;
const Genre = styled.span``;
const Popularity = styled.span``;
const Rating = styled.span``;
const Voted = styled.span``;

const Anime = ({ anime }) => {
  const [show, setShow] = useState(false);

  const handleHover = () => {
    setShow(true);
  };
  const handleLeave = () => {
    setShow(false);
  };
  return (
    <Container onMouseOver={handleHover} onMouseLeave={handleLeave}>
      <Wrapper>
        <ImageContainer image={anime.images.jpg.large_image_url} />
        <Title>{anime.title}</Title>
      </Wrapper>
      <Details style={show ? { display: "" } : { display: "none" }}>
        <Genre>Action</Genre>
        <Popularity>{anime.popularity}</Popularity>
        <Rating>{anime.rating}</Rating>
        <Voted>{anime.score}</Voted>
        <Voted>{anime.rank}</Voted>
      </Details>
    </Container>
  );
};

export default Anime;

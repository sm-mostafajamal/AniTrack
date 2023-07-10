import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
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

const DetailContainer = styled.div`
  top: 0;
  left: 120px;
  position: absolute;
  width: 250px;
  height: 120px;
  background-color: black;
  color: white;
  box-shadow: 0px 0px 14px 8px rgba(255, 255, 255, 0.19);
  -webkit-box-shadow: 0px 0px 14px 8px rgba(255, 255, 255, 0.19);
  -moz-box-shadow: 0px 0px 14px 8px rgba(255, 255, 255, 0.19);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-top: 15px;
  padding: 15px;
  z-index: 1;
`;
const GenreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Genre = styled.span`
  background-color: #5a2e98;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
`;
const Detail = styled.span`
  font-size: 13px;
  letter-spacing: 1px;
`;

const Anime = ({ anime }) => {
  const [show, setShow] = useState(false);

  const handleHover = () => {
    setShow(true);
  };
  const handleLeave = () => {
    setShow(false);
  };
  // console.log(anime);
  return (
    <Container onMouseOver={handleHover} onMouseLeave={handleLeave}>
      <Wrapper>
        <ImageContainer image={anime.images.jpg.large_image_url} />
        <Title>{anime.title}</Title>
      </Wrapper>
      <DetailContainer style={show ? { display: "" } : { display: "none" }}>
        <GenreContainer>
          {anime.genres.map((genre) => (
            <Genre>{genre.name}</Genre>
          ))}
        </GenreContainer>
        <Detail>Popularity: {anime.popularity}</Detail>
        <Detail>Score: {anime.score}</Detail>
        <Detail>Rank: {anime.rank}</Detail>
      </DetailContainer>
    </Container>
  );
};

export default Anime;

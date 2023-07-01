import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
const Container = styled.div``;
const AnimeLists = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
`;
const Anime = styled.div`
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
const Animes = () => {
  const { animes } = useSelector(({ anime }) => anime.animeLists);
  const showHomePageAnime = animes.slice(0, 25);
  return (
    <Container>
      <AnimeLists>
        {showHomePageAnime.map((anime) => (
          <Anime key={anime.mal_id}>
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
          </Anime>
        ))}
      </AnimeLists>
    </Container>
  );
};

export default Animes;

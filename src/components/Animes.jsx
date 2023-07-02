import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import ShowMore from "./ShowMore";
import Anime from "./Anime";

const Container = styled.div``;
const AnimeLists = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
`;

const Animes = () => {
  const { animes } = useSelector(({ anime }) => anime.animeLists);
  const showHomePageAnime = animes.slice(0, 25);
  return (
    <Container>
      <ShowMore title="Show All Animes">
        <AnimeLists>
          {showHomePageAnime.map((anime) => (
            <Anime key={anime.mal_id} anime={anime} />
          ))}
        </AnimeLists>
      </ShowMore>
    </Container>
  );
};

export default Animes;

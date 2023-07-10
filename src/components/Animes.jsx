import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import ShowMore from "./ShowMore";
import Anime from "./Anime";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Container = styled.div``;
const AnimeLists = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
`;
const AnimeLink = styled(Link)`
  text-decoration: none;
  width: 15%;
`;

const Animes = () => {
  const animes = useSelector(({ anime }) => anime);
  const showHomePageAnime = animes.animeLists.allAnimes.slice(0, 24);
  return (
    <Container>
      <ShowMore title="Show All Animes" link="/animes">
        {animes.isLoading ? (
          <Loading />
        ) : (
          <AnimeLists>
            {showHomePageAnime.map((anime) => (
              <AnimeLink to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                <Anime anime={anime} />
              </AnimeLink>
            ))}
          </AnimeLists>
        )}
      </ShowMore>
    </Container>
  );
};

export default Animes;

import React, { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import Anime from "../components/Anime";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { filterUpcomingAnime } from "../redux/filterReducer";
import { emptyAnimes } from "../redux/animeReducer";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: black;
  color: white;
`;
const FilterContainer = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Select = styled.select`
  border: none;
  width: 150px;
  text-align: center;
  color: white;
  background-color: black;
  letter-spacing: 2px;
`;
const Option = styled.option`
  font-size: 14px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-evenly;
  padding: 20px;
`;
const AnimeLink = styled(Link)`
  text-decoration: none;
  width: 15%;
`;

const UpcomingPopularAnimes = ({ setPage }) => {
  const animes = useSelector(({ anime }) => anime);
  const dispatch = useDispatch();
  const observer = useRef();

  const lastElement = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && animes.hasPage) {
          setTimeout(
            () =>
              setPage((prev) => {
                return { ...prev, pageName: "upcoming", num: prev.num + 1 };
              }),
            0
          );
        }
      });
      if (node) observer.current.observe(node);
    },
    [animes, setPage]
  );
  const handleSelect = (e) => {
    setPage((prev) => {
      return { ...prev, pageName: "upcoming", num: 1 };
    });
    dispatch(filterUpcomingAnime({ [e.target.name]: e.target.value }));
    dispatch(emptyAnimes("upcoming"));
  };
  return (
    <Container>
      <Navbar />
      <FilterContainer onChange={(e) => handleSelect(e)}>
        <Select name="filter">
          <Option style={{ display: "none" }}>Select Type</Option>
          <Option value="tv">TV Series</Option>
          <Option value="movie">Movies</Option>
          <Option value="ova">OVAs</Option>
          <Option value="special">Specials</Option>
          <Option value="ona">ONAs</Option>
          <Option value="music">Music</Option>
        </Select>
      </FilterContainer>

      <Wrapper>
        {animes.animeLists.upcoming.map((anime, index) =>
          animes.animeLists.upcoming.length === index + 1 ? (
            <AnimeLink
              to={`/anime/${anime.mal_id}`}
              key={anime.mal_id}
              ref={lastElement}
            >
              <Anime anime={anime} />
            </AnimeLink>
          ) : (
            <AnimeLink to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <Anime key={anime.mal_id} anime={anime} />
            </AnimeLink>
          )
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default UpcomingPopularAnimes;

import React, { useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { getAllAnime } from "../redux/animeReducer";
import Anime from "../components/Anime";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
  justify-content: space-between;
  padding: 20px;
`;
const AnimeWrapper = styled.div``;

const AllAnimes = () => {
  const [animes, hasPage, allAnime] = useSelector(
    ({ anime, filter }) => [
      anime.animeLists.allAnimes,
      anime.hasPage,
      filter.allAnimes,
    ],
    shallowEqual
  );
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const observer = useRef();
  const lastElement = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasPage) {
          setTimeout(() => setPage((prev) => prev + 1), 0);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasPage]
  );
  console.log(page);

  // custom hook
  useEffect(() => {
    dispatch(
      getAllAnime({
        type: "allAnimes",
        ...allAnime,
        queries: { ...allAnime.queries[0], page: page },
      })
    );
  }, [dispatch, allAnime, page]);

  const handleSelect = () => {
    console.log("selected");
  };
  return (
    <Container>
      <Navbar />
      <FilterContainer onChange={handleSelect}>
        <Select name="type">
          <Option value="">Select Type</Option>
          <Option value="tv">TV Series</Option>
          <Option value="movie">Movies</Option>
          <Option value="ova">OVAs</Option>
          <Option value="special">Specials</Option>
          <Option value="ona">ONAs</Option>
          <Option value="music">Music</Option>
        </Select>
        <Select name="status">
          <Option value="">Select Status</Option>
          <Option value="airing">Airing</Option>
          <Option value="complete">Complete</Option>
          <Option value="upcoming">Upcoming</Option>
        </Select>
        <Select name="rating">
          <Option value="g">Select Rating</Option>
          <Option value="g">All Ages</Option>
          <Option value="pg">Children</Option>
          <Option value="pg13">Teens 13 or Older</Option>
          <Option value="r17">17+ (violence & profanity)</Option>
          <Option value="r">Mild Nudity</Option>
          <Option value="rx">Hentai</Option>
        </Select>
      </FilterContainer>

      <Wrapper>
        {animes.map((anime, index) =>
          animes.length === index + 1 ? (
            <AnimeWrapper key={anime.mal_id} ref={lastElement}>
              <Anime anime={anime} />
            </AnimeWrapper>
          ) : (
            <Anime key={anime.mal_id} anime={anime} />
          )
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default AllAnimes;

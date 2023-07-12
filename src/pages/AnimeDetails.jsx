import React, { useEffect } from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import { getSingleAnime } from "../redux/animeReducer";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  background-color: black;
`;
const Wrapper = styled.div``;

const AnimeDetails = () => {
  const animeId = useLocation().pathname.split("/")[2];
  // console.log(animeId);
  const { anime } = useSelector((state) => state.anime.animeLists);
  console.log(anime);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleAnime(`anime/${animeId}/full`));
  }, [dispatch, animeId]);

  return (
    <Container>
      <Navbar />
      <Wrapper></Wrapper>
    </Container>
  );
};

export default AnimeDetails;

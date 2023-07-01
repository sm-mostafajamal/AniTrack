import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getAllAnime, getUpcomingAnimeSeason } from "../redux/animeReducer";
import UpcomingSeason from "../components/UpcomingSeason";
import Navbar from "../components/Navbar";

const Container = styled.div`
  background-color: black;
`;
const Cover = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div``;

const Home = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllAnime(page));
    // dispatch(getUpcomingAnimeSeason());
  }, [dispatch, page]);
  console.log("first");

  return (
    <Container>
      <Wrapper>
        <Navbar />
        <Cover>
          <UpcomingSeason />
        </Cover>
      </Wrapper>
    </Container>
  );
};

export default Home;

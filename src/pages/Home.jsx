import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getAllAnime } from "../redux/animeReducer";
import UpcomingSeason from "../components/UpcomingSeason";
import Navbar from "../components/Navbar";
import Animes from "../components/Animes";
import TopLists from "../components/TopLists";

const Container = styled.div`
  background-color: black;
  color: white;
`;

const Wrapper = styled.div``;
const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 20px;
`;
const AnimeContainer = styled.div`
  padding: 20px;
  display: flex;
  gap: 40px;
`;
const All = styled.div`
  flex: 4.5;
`;
const Top = styled.div`
  flex: 1.5;
`;

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAnime());
  }, [dispatch]);
  console.log("first");
  return (
    <Container>
      <Wrapper>
        <Navbar />
        <UpcomingSeason />
        <AnimeContainer>
          <All>
            <Title>Animes</Title>
            <Animes />
          </All>
          <Top>
            <Title>Top Animes</Title>
            <TopLists />
          </Top>
        </AnimeContainer>
      </Wrapper>
    </Container>
  );
};

export default Home;

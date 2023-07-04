import styled from "styled-components";
import UpcomingSeason from "../components/UpcomingSeason";
import Navbar from "../components/Navbar";
import Animes from "../components/Animes";
import TopLists from "../components/TopLists";
import Footer from "../components/Footer";

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
            <TopLists />
          </Top>
        </AnimeContainer>
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Home;

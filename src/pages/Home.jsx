import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
`;
const Wrapper = styled.div``;
const Cover = styled.div``;
const AnimeLists = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Anime = styled.div`
  width: 300px;
  height: 450px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
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

const Home = () => {
  const { animeLists, pagination } = useSelector((state) => state.anime);
  return (
    <Container>
      <Wrapper>
        <Cover></Cover>
        <AnimeLists>
          {animeLists.map((anime) => (
            <Anime key={anime.mal_id}>
              <ImageContainer image={anime.images.jpg.large_image_url}>
                <Top>
                  {/* <FavouriteIcon /> */}
                  {/* watchLater */}
                </Top>
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
      </Wrapper>
    </Container>
  );
};

export default Home;

import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { appendAnimes } from "../redux/animeReducer";

const Container = styled.div`
  background-color: black;
`;
const Wrapper = styled.div``;
const Cover = styled.div``;
const AnimeLists = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* gap: 10px; */
  justify-content: space-around;
  padding: 15px;
`;
const Anime = styled.div`
  width: 300px;
  height: 450px;
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

const Home = ({ isLoading, setPage }) => {
  const { animeLists, pagination } = useSelector((state) => state.anime);
  const dispatch = useDispatch();
  const observer = useRef();
  const lastElement = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && pagination.has_next_page) {
        let page = pagination.current_page;
        console.log(entries[0].isIntersecting);
        setPage(++page);
        // dispatch(appendAnimes());
      }
    });

    if (node) observer.current.observe(node);
  });

  console.log("from home", animeLists);
  return (
    <Container>
      <Wrapper>
        <Cover></Cover>
        <AnimeLists>
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            animeLists.map((anime, index) =>
              animeLists.length === index + 1 ? (
                <Anime key={anime.mal_id} ref={lastElement}>
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
              ) : (
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
              )
            )
          )}
        </AnimeLists>
      </Wrapper>
    </Container>
  );
};

export default Home;

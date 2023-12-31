import { ArrowBackIos, ArrowForwardIos, Launch } from "@mui/icons-material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import ShowMore from "./ShowMore";
import Loading from "./Loading";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  /* background-color: black; */
  color: white;
`;
const Arrow = styled.div`
  z-index: 2;
  position: absolute;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  transition: 1s all ease;
  transform: translateX(${(props) => props.slideindex * -100}vw);
`;
const Slider = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
`;
const AnimeImageContainer = styled.div`
  width: 40vw;
  text-align: center;
`;
const Image = styled.img`
  width: 70%;
  border-radius: 10px;
`;
const AnimeInfoContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Title = styled.h1`
  width: 90%;
  letter-spacing: 4px;
  font-weight: 500;
`;
const GenreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Genre = styled.span`
  background-color: #5a2e98;
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
`;
const Detail = styled.p``;
const VideoLink = styled.a`
  text-decoration: none;
  color: #07d9d9;
  display: flex;
  align-items: center;
  &:hover {
    color: #1bfdfd;
  }
`;

const UpcomingSeason = () => {
  const animes = useSelector(({ anime }) => anime);
  const [slideIndex, setSlideIndex] = useState(0);

  // const [autoSlide, setAutoSlide] = useState(true);
  // if (autoSlide) {
  // console.log(autoSlide);
  //   setTimeout(() => handleClick("auto"), 2000);
  // }

  const handleClick = (direction) => {
    // if (direction === "left" || direction === "right") setAutoSlide(false);
    if (direction === "left") {
      return setSlideIndex((prev) =>
        slideIndex > 0 ? prev - 1 : animes.animeLists.upcoming.length - 1
      );
    } else if (direction === "right") {
      return setSlideIndex((prev) =>
        slideIndex < animes.animeLists.upcoming.length - 1 ? prev + 1 : 0
      );
    } else {
      return setSlideIndex((prev) =>
        slideIndex < animes.animeLists.upcoming.length - 1 ? prev + 1 : 0
      );
    }
  };
  return (
    <Container>
      <ShowMore
        title={"Upcoming & Now Releasing Popular Anime Seasons"}
        link="/upcoming-animes"
      >
        <Wrapper>
          <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowBackIos />
          </Arrow>
          {animes.animeLists.isLoading ? (
            <Loading />
          ) : (
            <SliderContainer slideindex={slideIndex}>
              {animes.animeLists.upcoming.map((anime) => (
                <Slider key={anime.mal_id}>
                  <AnimeImageContainer>
                    <Image src={anime.images.jpg.large_image_url} />
                  </AnimeImageContainer>
                  <AnimeInfoContainer>
                    <Title>
                      {anime.title_english ? anime.title_english : anime.title}
                    </Title>
                    <GenreContainer>
                      {anime.genres.map((genre) => (
                        <Genre key={genre.mal_id}>{genre.name}</Genre>
                      ))}
                    </GenreContainer>
                    <Detail>Release Date: {anime.aired.string}</Detail>
                    <Detail>Boradcast Time: {anime.broadcast.string}</Detail>
                    <Detail>Popularity: {anime.popularity}</Detail>
                    <Detail>Favorites: {anime.favorites}</Detail>
                    <Detail>
                      <VideoLink href={anime.trailer.embed_url} target="_blank">
                        Watch the trailer
                        <Launch style={{ marginLeft: "5px" }} />
                      </VideoLink>
                    </Detail>
                  </AnimeInfoContainer>
                </Slider>
              ))}
            </SliderContainer>
          )}
          <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowForwardIos />
          </Arrow>
        </Wrapper>
      </ShowMore>
    </Container>
  );
};

export default UpcomingSeason;

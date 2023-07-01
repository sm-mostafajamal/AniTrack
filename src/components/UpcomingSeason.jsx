import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: black;
  color: white;
`;
const Arrow = styled.div`
  z-index: 2;
  position: absolute;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
`;
const Wrapper = styled.div`
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
const EngTitle = styled.span`
  font-size: 20px;
`;
const Detail = styled.p``;
const VideoLink = styled.a``;

const UpcomingSeason = () => {
  const { animeLists } = useSelector((state) => state.anime);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideAuto, setSlideAuto] = useState(true);

  const handleClick = (direction) => {
    if (direction === "left" || direction === "right") setSlideAuto(false);

    if (direction === "left") {
      return setSlideIndex((prev) =>
        slideIndex > 0 ? prev - 1 : animeLists.upcoming.length - 1
      );
    } else if (direction === "right") {
      return setSlideIndex((prev) =>
        slideIndex < animeLists.upcoming.length - 1 ? prev + 1 : 0
      );
    } else {
      return setSlideIndex((prev) =>
        slideIndex < animeLists.upcoming.length - 1 ? prev + 1 : 0
      );
    }
  };
  // if (slideAuto) {
  //   setTimeout(() => handleClick("auto"), 1000);
  //   console.log(slideAuto);
  // } else {
  //   setTimeout(() => setSlideAuto(!slideAuto), 3000);
  // }

  // useEffect(() => {

  // }, [slideAuto]);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIos />
      </Arrow>
      <Wrapper slideindex={slideIndex}>
        {animeLists.upcoming.map((anime) => (
          <Slider key={anime.mal_id}>
            <AnimeImageContainer>
              <Image src={anime.images.jpg.large_image_url} />
            </AnimeImageContainer>
            <AnimeInfoContainer>
              <Title>
                {anime.title_english ? anime.title_english : anime.title}
              </Title>
              <Detail>Genres: {}</Detail>
              <Detail>Release Date: {anime.aired.string}</Detail>
              <Detail>Boradcast Time: {anime.broadcast.string}</Detail>
              <Detail>Popularity: {anime.popularity}</Detail>
              <Detail>Favorites: {anime.favorites}</Detail>
              <Detail>
                <VideoLink href={anime.trailer.embed_url} target="_blank">
                  Watch the trailer
                </VideoLink>
              </Detail>
            </AnimeInfoContainer>
          </Slider>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIos />
      </Arrow>
    </Container>
  );
};

export default UpcomingSeason;

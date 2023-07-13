import React, { useEffect } from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import { emptyAnimes, getSingleAnime } from "../redux/animeReducer";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  FavoriteBorder,
  Podcasts,
  StarOutline,
  Timelapse,
} from "@mui/icons-material";

const Container = styled.div`
  background-color: black;
  color: white;
`;
const Wrapper = styled.div``;
const TopContainer = styled.div`
  /* display: flex; */
  /* justify-content: center;  */
  /* align-items: center; */
  /* padding: 30px 0; */
`;
const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
`;

const Top = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding: 20px 0;
`;

const Image = styled.img`
  width: 40%;
  border-radius: 10px;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  /* display: flex;
  align-items: center; */
  font-weight: 500;
  margin-bottom: 10px;
  letter-spacing: 2px;
`;
const Type = styled.span`
  border: 2px solid #5a2e98;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 13px;
  margin-left: 5px;
  letter-spacing: 3px;
`;

const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Genre = styled.span`
  height: fit-content;
  background-color: #5a2e98;
  margin-right: 10px;
  margin-bottom: 15px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
`;
const Details = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 10px;
`;
const Detail = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  .icon {
    padding-right: 10px;
    color: #5a2e98;
  }
`;

const Synopsis = styled.div``;
const Bottom = styled.div``;
const Left = styled.div``;
const SideContainer = styled.div``;
const Right = styled.div``;
const Trailer = styled.div``;

const AnimeDetails = () => {
  const dispatch = useDispatch();
  const animeId = useLocation().pathname.split("/")[2];
  const { anime } = useSelector((state) => state.anime.animeLists);

  useEffect(() => {
    dispatch(getSingleAnime(`anime/${animeId}/full`));
  }, [dispatch, animeId]);

  return (
    <Container>
      <Navbar />
      {Object.keys(anime).length ? (
        <Wrapper>
          <TopContainer>
            <TopWrapper>
              <Top>
                {anime.images && (
                  <Image src={anime.images.jpg.large_image_url} />
                )}
                <TitleContainer>
                  <Title>
                    {anime.title_english ? anime.title_english : anime.title}
                    <Type>{anime.type}</Type>
                  </Title>
                  <Genres>
                    {anime.genres.map((genre) => (
                      <Genre key={genre.mal_id}>{genre.name}</Genre>
                    ))}
                  </Genres>
                  <Details>
                    <Detail>{anime.status} |</Detail>
                    <Detail>Aired: {anime.aired.string}</Detail>
                    <Detail>
                      <Podcasts className="icon" />
                      {anime.airing && anime.broadcast.string}
                      {/* `${anime.broadcast.day} at ${anime.broadcast.time}`} */}
                    </Detail>
                    <Detail>
                      <Timelapse className="icon" />
                      {anime.duration}
                    </Detail>
                  </Details>
                  <Details>
                    <Detail>
                      <Type>Score: {anime.score}</Type>
                    </Detail>
                    <Detail>Members: {anime.members} </Detail>
                  </Details>
                  <Details>
                    <Detail>
                      <StarOutline
                        style={{ color: "gold", paddingRight: "10px" }}
                      />
                      {anime.rank} Ranking
                    </Detail>
                    <Detail>
                      <FavoriteBorder
                        style={{ color: "#E85D75", paddingRight: "10px" }}
                      />
                      {anime.popularity} Popularity
                    </Detail>
                    <Detail>
                      <FavoriteBorder
                        style={{ color: "#a80909", paddingRight: "10px" }}
                      />
                      {anime.favorites} Favorites
                    </Detail>
                  </Details>
                </TitleContainer>
              </Top>
            </TopWrapper>
            {/* <Synopsis>{anime.synopsis}</Synopsis> */}
          </TopContainer>
          {/* <Bottom>
          <Left>
            <SideContainer>
              <Detail>Background</Detail>
              <Detail>episodes</Detail>
              <Detail>streaming</Detail>
              <Detail>studios</Detail>
              <Detail>year released</Detail>
              <Detail>type</Detail>
              <Detail>season</Detail>
            </SideContainer>
          </Left>
          <Right>
            <Trailer></Trailer>
          </Right>
        </Bottom> */}
        </Wrapper>
      ) : (
        <span>Loading...</span>
      )}
    </Container>
  );
};

export default AnimeDetails;

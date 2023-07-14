import React, { useEffect } from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import { getSingleAnime } from "../redux/animeReducer";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  Cast,
  DateRange,
  FavoriteBorder,
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  Podcasts,
  StarOutline,
  Timelapse,
} from "@mui/icons-material";

const Container = styled.div`
  background-color: black;
  color: white;
`;
const Wrapper = styled.div``;
const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 40px;
`;
const ImageContainer = styled.div`
  flex: 2;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;
const TitleContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;
const Hr = styled.hr`
  background-color: white;
  width: 50%;
  margin: 50px auto;
`;

const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 10px;
  letter-spacing: 2px;
`;
const Type = styled.span`
  border: 2px solid #5a2e98;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
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
  margin-bottom: 20px;
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
const Bottom = styled.div`
  padding: 30px;
  display: flex;
`;
const Left = styled.div`
  width: 20%;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: 700;
  color: #aabfd7;
  letter-spacing: 1px;
`;
const Data = styled.span`
  font-weight: 500;
  color: #aab0b6;
  font-size: 13px;
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ifram = styled.iframe``;

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
          <TopWrapper>
            <Top>
              <ImageContainer>
                {anime.images && (
                  <Image src={anime.images.jpg.large_image_url} />
                )}
              </ImageContainer>
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
                  <Detail>
                    <Cast className="icon" />
                    {anime.status}
                  </Detail>
                  <Detail>
                    <DateRange className="icon" /> {anime.aired.string}
                  </Detail>
                  <Detail>
                    {anime.airing && <Podcasts className="icon" />}
                    {anime.airing && anime.broadcast.string}
                  </Detail>
                  <Detail>
                    <Timelapse className="icon" />
                    {anime.duration}
                  </Detail>
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
                <Details>
                  <Detail>
                    <Type>Score: {anime.score}</Type>
                  </Detail>
                  <Detail>Members: {anime.members} </Detail>
                </Details>
                <Details>
                  <Detail>
                    Synopsis <KeyboardArrowDownOutlined />
                    <KeyboardArrowUpOutlined />
                  </Detail>
                  <Synopsis>{anime.synopsis}</Synopsis>
                </Details>
              </TitleContainer>
            </Top>
          </TopWrapper>
          <Hr />
          <Bottom>
            <Left>
              <Column>
                {anime.background && {
                  Background: <Data>{anime.background}</Data>,
                }}
              </Column>

              <Column>
                Episodes: <Data>{anime.episodes}</Data>
              </Column>
              <Column>
                {anime.demographics.length > 0 && "Demographics:"}
                {anime.demographics.map((d) => (
                  <Data key={d.mal_id}>{d.name}</Data>
                ))}
              </Column>
              <Column>
                Relations:
                {anime.relations.map((r, id) => (
                  <Data key={id}>{r.relation}</Data>
                ))}
              </Column>
              <Column>
                {anime.streaming.length > 0 && "Streaming:"}

                {anime.streaming.map((s, id) => (
                  <Data key={id}>{s.name}</Data>
                ))}
              </Column>
              <Column>
                Producers:
                {anime.producers.map((p) => (
                  <Data key={p.mal_id}>{p.name}</Data>
                ))}
              </Column>
              <Column>
                Studios:
                {anime.studios.map((s) => (
                  <Data key={s.mal_id}>{s.name}</Data>
                ))}
              </Column>
              <Column>
                Season: <Data>{anime.season}</Data>
              </Column>
              <Column>
                Released: <Data>{anime.year}</Data>
              </Column>
            </Left>
            <Right>
              <Ifram
                width="100%"
                height="480"
                src={`https://www.youtube.com/embed/${anime.trailer.youtube_id}`}
                allowFullScreen
                title="Embedded youtube"
                value="SAMEORIGIN"
                // sandbox="allow-same-origin"
              />
            </Right>
          </Bottom>
        </Wrapper>
      ) : (
        <span>Loading...</span>
      )}
    </Container>
  );
};

export default AnimeDetails;

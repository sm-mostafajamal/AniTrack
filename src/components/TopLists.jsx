import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import ShowMore from "./ShowMore";
import Loading from "./Loading";
const Container = styled.div`
  color: white;
`;
const AnimeLists = styled.div``;
const Anime = styled.div`
  display: flex;
  padding-bottom: 10px;
  width: 100%;
`;
const Left = styled.div`
  width: 40%;
  display: flex;
  padding-right: 10px;
`;
const Numbering = styled.span`
  font-size: 30px;
  width: 20%;
  padding-right: 10px;
`;
const Image = styled.img`
  width: 70%;
`;
const Rank = styled.span``;
const Right = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 16px;
  padding-bottom: 5px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  color: #a8a3a3;
`;
const Episodes = styled.span``;
const Status = styled.span``;
const Score = styled.span``;

const TopLists = () => {
  const animes = useSelector(({ anime }) => anime);
  const showHomePageAnime = animes.animeLists.top.slice(0, 10);
  return (
    <Container>
      <ShowMore title="Top Animes" position="top">
        {animes.isLoading ? (
          <Loading />
        ) : (
          <AnimeLists>
            {showHomePageAnime.map((anime, i) => (
              <Anime key={anime.mal_id}>
                <Left>
                  <Numbering>{i + 1}</Numbering>
                  <Image src={anime.images.jpg.large_image_url} />
                </Left>
                <Right>
                  <Title>{anime.title}</Title>
                  <Details>
                    <Episodes>
                      {anime.episodes && `Episodes Released: ${anime.episodes}`}
                    </Episodes>
                    <Status>{anime.status}</Status>
                    <Score>Score: {anime.score}</Score>
                    <Rank>Rank: {anime.rank}</Rank>
                  </Details>
                </Right>
              </Anime>
            ))}
          </AnimeLists>
        )}
      </ShowMore>
    </Container>
  );
};

export default TopLists;

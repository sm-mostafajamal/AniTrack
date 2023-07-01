import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
const Container = styled.div`
  color: white;
`;
const AnimeLists = styled.div``;
const Anime = styled.div`
  display: flex;
`;
const Image = styled.img``;
const Left = styled.div``;
const Rank = styled.span``;
const Right = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.span``;
const Episodes = styled.span``;
const Status = styled.span``;
const Score = styled.span``;

const TopLists = () => {
  const { top } = useSelector(({ anime }) => anime.animeLists);
  const showHomePageAnime = top.slice(0, 8);
  return (
    <Container>
      <AnimeLists>
        {showHomePageAnime.map((anime) => (
          <Anime key={anime.mal_id}>
            <Left>
              <Rank>{anime.rank}</Rank>
              <Image src={anime.images.jpg.small_image_url} />
            </Left>
            <Right>
              <Title>{anime.title}</Title>
              <Episodes>{anime.episodes}</Episodes>
              <Status>{anime.status}</Status>
              <Score>{anime.score}</Score>
            </Right>
          </Anime>
        ))}
      </AnimeLists>
    </Container>
  );
};

export default TopLists;

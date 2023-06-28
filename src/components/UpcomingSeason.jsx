import React from 'react'
import { useSelector } from 'react-redux'
import { styled } from 'styled-components'

const Container = styled.div`
padding: 50px;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div``
const Title = styled.div``
const Aired = styled.div``
const Broadcast = styled.div``
const Popularity = styled.div``
const Trailer = styled.div``
const VideoLink = styled.a``

const Right = styled.div`
/* display: flex; */
text-align: end;
`
const Image = styled.img`
    height: 90%;
    width: 80%;

`

const UpcomingSeason = () => {
const {animeLists, pagination} = useSelector( state => state.anime)
// console.log(animeLists.upcoming[0].trailer.url)
console.log(animeLists.upcoming)
// console.log(animeLists.upcoming[0].trailer.images) 


  return (
      <Container>
      {animeLists.upcoming.map(anime => (

      <Wrapper key = {anime.mal_id}>
        <Left>
            <Title>{anime.title}</Title>
            <Aired>{anime.aired.string}</Aired>
            <Broadcast>Broadcast: {anime.broadcast.string} Timezone: {anime.broadcast.timezone}</Broadcast>
            <Popularity>{anime.popularity}</Popularity>
            <Trailer><VideoLink href={anime.trailer.embed_url} target='_blank'>
            Watch the trailer
            </VideoLink></Trailer>
        </Left>
        <Right>
        {/* <Image src={anime.trailer.images.maximum_image_url} /> */}
        <Image src={anime.images.jpg.large_image_url} />

        </Right>
      </Wrapper>
      ))}

    </Container>
    )
}

export default UpcomingSeason
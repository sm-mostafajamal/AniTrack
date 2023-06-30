import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { styled } from 'styled-components'

const Container = styled.div`
display: flex;
align-items: center;
position: relative;
overflow: hidden;

`
const Arrow = styled.div`
z-index: 2;
position: absolute;
border: 1px solid white;
left: ${({direction}) => direction === "left" && "10px"};
right: ${({direction}) => direction === "right" && "10px"};
cursor: pointer;
`
const Wrapper = styled.div`
width: 100%;
display: flex;
/* transform: translateX(-100vw); */
transition: 1s all ease;
transform: translateX(${({slideIndex}) => slideIndex * -100}vw);
`
const Slider = styled.div`
width: 100vw;
border: 5px solid black;
display: flex;
align-items: center;
justify-content: space-between;
`

const AnimeInfo = styled.div`
flex: 1;
width: max-content;
`
const Title = styled.h1``
const Aired = styled.div``
const Broadcast = styled.div``
const Popularity = styled.div``
const Trailer = styled.div``
const VideoLink = styled.a``

const AnimeImage = styled.div`

`
const Image = styled.img`
width: 100%;
height: 100%;
`

const UpcomingSeason = () => {
const {animeLists, pagination} = useSelector( state => state.anime)

const [slideIndex, setSlideIndex] = useState(0)
console.log(slideIndex)
const handleClick = (direction) => {
  if(direction === 'left') {
    setSlideIndex(prev => slideIndex > 0 ? prev - 1 : animeLists.upcoming.length-1)
  }else {
    setSlideIndex(prev => slideIndex < animeLists.upcoming.length -1 ? prev + 1 : 0)
  }
}
// console.log(animeLists.upcoming[0].trailer.images) 


  return (
      <Container>
      <Arrow direction= "left" onClick={() => handleClick("left")}>
        <ArrowBackIos />
      </Arrow>
      <Arrow direction = "right" onClick={() => handleClick("right")}>
        <ArrowForwardIos />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
      {animeLists.upcoming.map(anime => (
      <Slider key = {anime.mal_id}>
        <AnimeImage>
        {/* <Image src={anime.trailer.images.maximum_image_url} /> */}
        <Image src={anime.images.jpg.large_image_url} />
        </AnimeImage>
        <AnimeInfo>
            <Title>{anime.title}</Title>
            <Title>{anime.title_english}</Title>
            <Aired>{anime.aired.string}</Aired>
            <Broadcast>Broadcast: {anime.broadcast.string} Timezone: {anime.broadcast.timezone}</Broadcast>
            <Popularity>{anime.popularity}</Popularity>
            <Trailer><VideoLink href={anime.trailer.embed_url} target='_blank'>
            Watch the trailer
            </VideoLink></Trailer>
        </AnimeInfo>
      </Slider>
      ))}
      </Wrapper>

    </Container>
    )
}

export default UpcomingSeason
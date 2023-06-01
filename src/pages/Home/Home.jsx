import styled from 'styled-components'
import { Header } from '../../components/Header/Header'
import { Carousel } from './components/Carousel'

export function Home() {
  return (
    <HomeDiv>
      <Header />
      <ImgDiv>
        <img
          src="https://www.xtrafondos.com/descargar.php?id=9584&resolucion=4114x2314"
          alt="alta imagen"
        />
      </ImgDiv>
      <PresentacionDiv>
        <h1>Bienvenidos.</h1>
        <p>
          Millones de películas, programas de televisión y personas por
          descubrir. Explora ahora.
        </p>
      </PresentacionDiv>
      <PopularDiv>
        <h2>Popular</h2>
        <Carousel />
      </PopularDiv>
    </HomeDiv>
  )
}

const HomeDiv = styled.div`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  width: 100%;
`

const ImgDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  border-radius: 0;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #0006, #1a191f 100%);
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const PresentacionDiv = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  h1 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

const PopularDiv = styled.div`
  position: relative;
  width: 100%;
  padding: 0 2rem;
  max-width: 110rem;
  border-radius: 0.4rem;
  margin: 0 auto;
  z-index: 100;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    color: #fff;
  }
`

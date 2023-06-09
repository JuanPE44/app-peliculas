import styled from 'styled-components'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Carousel } from './components/Carousel'
import { SimpleSearch } from './components/SimpleSearch'
import { colors } from '../../common/theme'

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
        <div className="contenido">
          <h1>
            Bienvenidos<span>.</span>
          </h1>
          <p>
            Millones de películas, programas de televisión y personas por
            descubrir. Explora ahora.
          </p>
          <SimpleSearch />
        </div>
      </PresentacionDiv>
      <PopularDiv>
        <h2 className="carousel-title">Peliculas populares</h2>
        <Carousel type="movie" />
        <h2 className="carousel-title">Series populares</h2>
        <Carousel type="tv" />
      </PopularDiv>
      <Footer />
    </HomeDiv>
  )
}

const HomeDiv = styled.div`
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
    object-position: top;
  }
`

const PresentacionDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #fff;
  z-index: 100;
  padding: 4rem;
  .contenido {
    max-width: 90rem;
    padding: 0 2rem;

    h1 {
      text-align: left;
      font-size: 4.5rem;
      margin-bottom: 2rem;

      span {
        color: ${colors.primary};
      }
    }

    p {
      font-size: 2.5rem;
      margin: 2rem 0;
    }
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

  .carousel-title {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 4rem;
    color: #fff;
    color: ${colors.secondary};
  }
`

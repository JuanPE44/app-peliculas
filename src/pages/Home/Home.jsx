import styled from 'styled-components'
import { Header } from '../../components/Header/Header'

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
    </HomeDiv>
  )
}

const HomeDiv = styled.div`
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
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, #1a191f 100%);
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

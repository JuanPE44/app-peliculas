import styled from 'styled-components'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { InfoMovie } from './components/InfoMovie'

export function Movie() {
  return (
    <MovieDiv>
      <Header />
      <InfoMovie />
      <Footer />
    </MovieDiv>
  )
}

const MovieDiv = styled.div`
  padding-top: 12rem;
  position: relative;
  width: 100%;
  min-height: 100vh;

  .fondo {
    position: absolute;

    height: 50vh;
    object-fit: cover;
  }
`

import styled from 'styled-components'
import { Header } from '../../components/Header/Header'
import { useParams } from 'react-router-dom'
import { useMovie } from '../../hooks/useMovie'

export function Movie() {
  const { type, postMoviId } = useParams()
  const { movie } = useMovie({ postMoviId, type })

  return (
    <MovieDiv>
      <Header />
      <img className="fondo" src={movie && movie.poster} />
      <h1 style={{ fontSize: '10rem' }}>{movie && movie?.title}</h1>
    </MovieDiv>
  )
}

const MovieDiv = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;

  .fondo {
    position: absolute;

    height: 50vh;
    object-fit: cover;
  }
`

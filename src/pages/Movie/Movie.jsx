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
      <h1 style={{ fontSize: '10rem' }}>{movie && movie?.title}</h1>
    </MovieDiv>
  )
}

const MovieDiv = styled.div`
  width: 100%;
  min-height: 100%;
`

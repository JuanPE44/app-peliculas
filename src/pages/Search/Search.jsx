import styled from 'styled-components'
import { Header } from '../../components/Header/Header'
import { useParams } from 'react-router-dom'
import { useMovies } from '../../hooks/useMovies'
import { ListOfMovies } from './ListOfMovies'

export function Search() {
  const { search } = useParams()
  const { movies, loadingMovies } = useMovies({ search })

  return (
    <SearchDiv>
      <Header />
      <ListOfMovies movies={movies} loading={loadingMovies} title={search} />
    </SearchDiv>
  )
}

const SearchDiv = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;

  h1 {
    font-size: 2rem;
    margin: 1rem;
  }

  .fondo {
    position: absolute;

    height: 50vh;
    object-fit: cover;
  }
`

import styled from 'styled-components'
import { Header } from '../../components/Header/Header'
import { useParams } from 'react-router-dom'
import { useMovies } from '../../hooks/useMovies'
import { ListOfMovies } from './ListOfMovies'
import { colors } from '../../common/theme'

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
`

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
      <ContainerMovies>
        <SubTitle>
          Resultado de busqueda: <span>{search}</span>
        </SubTitle>
        <ListOfMovies movies={movies} loading={loadingMovies} />
      </ContainerMovies>
    </SearchDiv>
  )
}

const SearchDiv = styled.div`
  padding-top: 10rem;
  position: relative;
  width: 100%;
  min-height: 100vh;
`

const ContainerMovies = styled.div`
  max-width: 110rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 0 2rem;
  margin: auto;
`

const SubTitle = styled.h2`
  font-size: 1.7rem;
  color: ${colors.white};
  font-weight: 700;

  span {
    font-size: 1.7rem;
    background: linear-gradient(45deg, ${colors.primary}, ${colors.black});
    -webkit-background-clip: text;
    color: transparent;
    background-size: 300%;
    animation: name 15s infinite ease;

    &:first-letter {
      text-transform: capitalize;
    }
  }

  &:first-letter {
    text-transform: uppercase;
  }

  @keyframes name {
    0% {
      background-position: left;
    }
    50% {
      background-position: right;
    }
    100% {
      background-position: left;
    }
  }
`

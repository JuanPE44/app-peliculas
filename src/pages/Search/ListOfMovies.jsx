import styled from 'styled-components'
import { Movie } from './Movie'
import { Spinner } from '../../common/Spinner'
import { colors } from '../../common/theme'

export function ListOfMovies({ movies, loading, title }) {
  return loading ? (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  ) : (
    <ListContainer>
      <SubTitle>
        Resultado de busqueda: <span>{title}</span>
      </SubTitle>
      <List className="movies">
        {movies?.map((movie) => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster}
              date={movie.year}
              type={movie.type}
            />
          )
        })}
      </List>
    </ListContainer>
  )
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;
`

const LoadingContainer = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: ${colors.grey};
`

const SubTitle = styled.h2`
  margin: 3rem 0 2rem 3rem;
  font-size: 2rem;
  color: ${colors.black};
  font-weight: 700;

  span {
    font-size: 2rem;
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

const List = styled.ul`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  gap: 3rem 1.5rem;
  list-style: none;
`

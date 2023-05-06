import styled from 'styled-components'
import { Movie } from './Movie'
import { Spinner } from '../../common/Spinner'

export function ListOfMovies({ movies, loading, title }) {
  return loading ? (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  ) : (
    <ListContainer>
      <SubTitle>{`Resultado de busqueda: ${title}`}</SubTitle>
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
  background: #10161d;
`

const SubTitle = styled.h2`
  font-size: 2.2rem;
  color: #fff;
  margin: 2rem 0;
  font-weight: 700;

  &:first-letter {
    text-transform: uppercase;
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

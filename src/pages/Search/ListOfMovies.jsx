import styled from 'styled-components'
import { Movie } from './Movie'
import { Spinner } from '../../common/Spinner'
import { colors } from '../../common/theme'

export function ListOfMovies({ movies, loading }) {
  return loading ? (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  ) : (
    <ListContainer>
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
`

const LoadingContainer = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: ${colors.grey};
`

const List = styled.ul`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 1.3rem;
  list-style: none;
`

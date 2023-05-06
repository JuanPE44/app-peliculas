import styled from 'styled-components'
import { MovieSearch } from './MovieSearch'
import { useSearchContext } from '../../hooks/useSearchContext'
import { Spinner } from '../../common/Spinner'
import { Link } from 'react-router-dom'

export function ListOfSearch() {
  const { moviesSearched, loading, search, clearSearch } = useSearchContext()
  const hasSearch = search?.length > 0

  const handleClickLink = () => {
    clearSearch()
  }

  return loading ? (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  ) : (
    <ListContainer>
      <SubTitle>Peliculas y series</SubTitle>
      <List className="movies">
        {moviesSearched?.slice(0, 4).map((movie) => {
          return (
            <MovieSearch
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
      <BuscarMas>
        {hasSearch && (
          <Link
            className="link"
            to={`/search/${search}`}
            onClick={() => handleClickLink()}
          >
            Ver mas resulatados de {search}
          </Link>
        )}
      </BuscarMas>
    </ListContainer>
  )
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const LoadingContainer = styled.div`
  min-height: 50rem;
  display: grid;
  place-items: center;
  background: #10161d;
`

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  padding: 2rem 0 1rem 1.5rem;
  color: #b9bdcc;
  border-bottom: 0.1rem solid #1c252f;
`

const List = styled.ul`
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-template-columns: 20rem;
  //grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  padding: 1rem;
  gap: 1.5rem;
  list-style: none;
`

const BuscarMas = styled.div`
  border-top: 0.1rem solid #1c252f;
  display: flex;
  justify-content: center;
  padding: 1rem;
  .link {
    padding: 1rem;
    font-size: 1.4rem;
    text-align: center;
    color: #78a6b8;
    text-decoration: none;
  }
`

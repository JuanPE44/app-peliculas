import styled from 'styled-components'
import { MovieSearch } from './MovieSearch'
import { useSearchContext } from '../../hooks/useSearchContext'
import { Spinner } from '../../common/Spinner'
import { Link } from 'react-router-dom'
import { colors } from '../../common/theme'

export function ListOfSearch() {
  const { moviesSearched, loading, search, setInputActive } = useSearchContext()
  const hasSearch = search?.length > 0

  const handleClickLink = () => {
    setInputActive(false)
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
      <SearchMore>
        {hasSearch && (
          <Link
            className="link"
            to={`/search/${search}`}
            onClick={() => handleClickLink()}
          >
            Ver mas resulatados de {search}
          </Link>
        )}
      </SearchMore>
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
  background-color: #0007;
`

const SubTitle = styled.div`
  font-size: 1.5rem;
  color: #fff;
  padding: 2rem 0 2rem 1.5rem;
  color: ${colors.white};
  border-bottom: 0.1rem solid ${colors.secondary};
`

const List = styled.ul`
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-template-columns: 20rem;
  padding: 1rem;
  gap: 1.5rem;
  list-style: none;
`

const SearchMore = styled.div`
  border-top: 0.1rem solid ${colors.secondary};
  display: flex;
  justify-content: center;
  padding: 1rem;
  .link {
    padding: 1rem;
    font-size: 1.4rem;
    text-align: center;
    color: ${colors.secondary};
    text-decoration: none;
  }
`

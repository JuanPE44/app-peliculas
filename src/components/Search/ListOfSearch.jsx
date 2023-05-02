import styled from 'styled-components'
import { SearchMovie } from './SearchMovie'

export function ListOfSearch({ movies }) {
  return (
    <>
      <SubTitle>Peliculas y series</SubTitle>
      <List className="movies">
        {movies.map((movie, index) => {
          if (index > 3) return
          return (
            <SearchMovie
              key={movie.id}
              title={movie.title}
              poster={movie.poster}
              year={movie.year}
            />
          )
        })}
      </List>
    </>
  )
}

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  padding: 2rem 0 0 1rem;
  color: #b9bdcc;
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

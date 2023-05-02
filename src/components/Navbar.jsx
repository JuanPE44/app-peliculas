import styled from 'styled-components'
import { RenderSearch } from './Search/RenderSearch'
import { FormSearch } from './Search/FormSearch'
import { useMovies } from '../hooks/useMovies'
import { useSearch } from '../hooks/useSearch'

export function Navbar() {
  const { search, setSearch, errorSearch } = useSearch()
  const { movies, searchMovies } = useMovies({ search })

  return (
    <Nav>
      <FormSearch
        searchMovies={searchMovies}
        search={search}
        setSearch={setSearch}
      />
      <div className="movies-container">
        <p>{errorSearch}</p>
        <RenderSearch movies={movies} />
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #10161d;
  padding: 0.6rem;
  border-radius: 0.4rem;
  overflow: hidden;

  .movies-container {
    width: 100%;
  }
`

import { ListOfSearch } from './ListOfSearch'

export function RenderSearch({ movies, setSearch }) {
  const hasMovies = movies?.length > 0
  return hasMovies ? (
    <ListOfSearch movies={movies} setSearch={setSearch} />
  ) : (
    <p></p>
  )
}

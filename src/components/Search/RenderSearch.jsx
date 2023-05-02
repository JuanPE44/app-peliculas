import { ListOfSearch } from './ListOfSearch'

export function RenderSearch({ movies }) {
  const hasMovies = movies?.length > 0
  return hasMovies ? <ListOfSearch movies={movies} /> : <p></p>
}

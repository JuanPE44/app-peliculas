import { ListOfSearch } from './ListOfSearch'
import { useSearchContext } from '../../hooks/useSearchContext'

export function RenderSearch() {
  const { moviesSearched, isFirstInput } = useSearchContext()
  const hasMovies = moviesSearched?.length > 0
  return hasMovies && !isFirstInput.current ? <ListOfSearch /> : <p></p>
}

import { useContext } from 'react'
import { SearchContext } from '../hooks/SearchContext'

export const useSearchContext = () => {
  return useContext(SearchContext)
}

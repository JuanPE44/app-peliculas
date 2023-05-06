import { createContext } from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'
import { getSearch } from '../services/getSearch'

export const SearchContext = createContext()

export const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const [moviesSearched, setMoviesSearched] = useState([])
  const [loading, setLoading] = useState(true)
  const isFirstInput = useRef(true)
  const previousSearch = useRef(search)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setMoviesSearched([])
      return
    }

    setError(null)
  }, [search])

  const searchMovies = useCallback(async ({ search }) => {
    if (previousSearch.current === search) return

    try {
      setLoading(true)
      const newMovies = await getSearch(search)
      setMoviesSearched(newMovies)
      previousSearch.current = search
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  })

  const clearSearch = () => {
    setSearch('')
    setMoviesSearched([])
  }

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        errorSearch: error,
        moviesSearched,
        searchMovies,
        loading,
        isFirstInput,
        clearSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

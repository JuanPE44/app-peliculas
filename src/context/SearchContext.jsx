import { createContext } from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'
import { getSearch } from '../services/getSearch'

export const SearchContext = createContext()

export const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState('')
  const [moviesSearched, setMoviesSearched] = useState([])
  const [loading, setLoading] = useState(true)
  const [inputActive, setInputActive] = useState(false)
  const isFirstInput = useRef(true)
  const previousSearch = useRef(search)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
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

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        moviesSearched,
        searchMovies,
        loading,
        isFirstInput,
        inputRef,
        setInputActive,
        inputActive,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

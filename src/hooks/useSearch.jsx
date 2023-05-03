import { useState, useEffect, useRef, useCallback } from 'react'
import { getSearch } from '../services/getSearch'

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const isFirstInput = useRef(true)
  const previousSearch = useRef(search)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setMovies([])
      return
    }

    setError(null)
  }, [search])

  const searchMovies = useCallback(async ({ search }) => {
    if (previousSearch.current === search) return

    try {
      setLoading(true)
      const newMovies = await getSearch(search)
      setMovies(newMovies)
      previousSearch.current = search
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  })

  return {
    search,
    setSearch,
    errorSearch: error,
    movies,
    searchMovies,
    loading,
  }
}

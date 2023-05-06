import { useState, useEffect } from 'react'
import { getSearch } from '../services/getSearch'

export function useMovies({ search }) {
  const [movies, setMovies] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    getSearch(search)
      .then((data) => setMovies(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [search])

  return { movies, loadingMovies: loading }
}

import { getMovies } from '../services/getMovies'
import { useState, useRef } from 'react'

export function useMovies({ search }) {
  const [movies, setMovies] = useState()
  const [loading, setLoading] = useState(true)
  const previousSearch = useRef(search)

  const searchMovies = async () => {
    console.log('searchmovies')
    if (previousSearch.current === search) return

    try {
      setLoading(true)
      const newMovies = await getMovies(search)
      setMovies(newMovies)
      previousSearch.current = search
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return { movies, searchMovies, loading }
}

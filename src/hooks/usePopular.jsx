import { useState, useEffect } from 'react'
import { getPopular } from '../services/getPopular'

export function usePopular(type) {
  const [popularMovies, setPopularMovies] = useState()
  useEffect(() => {
    getPopular(type)
      .then((data) => setPopularMovies(data))
      .catch((err) => console.error(err))
  }, [])

  return { popularMovies }
}

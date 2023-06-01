import { useState, useEffect } from 'react'
import { getPopular } from '../services/getPopular'

export function usePopular() {
  const [popularMovies, setPopularMovies] = useState()
  useEffect(() => {
    getPopular('movie')
      .then((data) => setPopularMovies(data))
      .catch((err) => console.error(err))
  }, [])

  return { popularMovies }
}

import { useState, useEffect } from 'react'
import { getMovie } from '../services/getMovie'

export function useMovie({ postMoviId, type }) {
  const [movie, setMovie] = useState()
  useEffect(() => {
    getMovie(postMoviId, type)
      .then((data) => setMovie(data))
      .catch((err) => console.error(err))
  }, [postMoviId])

  return { movie }
}

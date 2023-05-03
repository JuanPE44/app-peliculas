import { useState, useEffect } from 'react'
import { getMovie } from '../services/getMovie'

export function useMovie(id) {
  const [movie, setMovie] = useState()
  useEffect(() => {
    getMovie(id)
      .then((data) => setMovie(data))
      .catch((err) => console.error(err))
  }, [id])

  return { movie }
}

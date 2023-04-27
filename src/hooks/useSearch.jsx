import { useState, useEffect, useRef } from 'react'

export function useSearch() {
  const isFirstInput = useRef(true)
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('La pelicula debe tener al menos un caracter')
      return
    }

    if (search.length < 4) {
      setError('La busqueda debe tener al menos 4 caracteres..')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, errorSearch: error }
}

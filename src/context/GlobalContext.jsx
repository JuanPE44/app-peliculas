import { createContext } from 'react'
import { useState } from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [movies, setMovies] = useState({})

  return (
    <GlobalContext.Provider value={{ movies, setMovies }}>
      {children}
    </GlobalContext.Provider>
  )
}

import { createContext } from 'react'

export const SearchContext = createContext()

export const SearchContextProvider = ({ children }) => {
  return <SearchContext.Provider value={{}}>{children}</SearchContext.Provider>
}

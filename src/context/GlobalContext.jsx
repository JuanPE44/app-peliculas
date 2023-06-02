import { createContext } from 'react'
import { useState, useCallback, useEffect } from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState('')

  const changeResolution = useCallback(() => {
    let width = window.innerWidth
    setWindowWidth(width)
  })

  useEffect(() => {
    window.addEventListener('resize', changeResolution)

    return () => {
      window.removeEventListener('resize', changeResolution)
    }
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        windowWidth,
        changeResolution,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

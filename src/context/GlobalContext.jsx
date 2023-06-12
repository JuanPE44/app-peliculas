import { createContext } from 'react'
import { useState, useCallback, useEffect } from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState('')
  const [elementsToShow, setElementsToShow] = useState(5)

  const changeResolution = useCallback(() => {
    let width = window.innerWidth
    const newElementsToShow = getElements(width)
    setWindowWidth(width)
    setElementsToShow(newElementsToShow)
  })

  const getElements = (width) => {
    if (width > 765) return 5
    if (width > 400) return 3
    return 2
  }

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
        elementsToShow,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

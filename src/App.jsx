import { GlobalStyle } from './common/GlobalStyle'
import styled from 'styled-components'
import { MyRoutes } from './routes/routes'
import { SearchContextProvider } from './context/SearchContext'
import { useGlobalContext } from './hooks/useGlobalContext'

function App() {
  const { changeResolution } = useGlobalContext()
  return (
    <>
      <GlobalStyle />
      <AppDiv onLoad={changeResolution}>
        <SearchContextProvider>
          <MyRoutes />
        </SearchContextProvider>
      </AppDiv>
    </>
  )
}

export default App

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

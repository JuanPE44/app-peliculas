import { GlobalStyle } from './common/GlobalStyle'
import styled from 'styled-components'
import { MyRoutes } from './routes/routes'
import { SearchContextProvider } from './context/SearchContext'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppDiv>
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

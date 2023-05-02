import { GlobalContextProvider } from './context/GlobalContext'
import { GlobalStyle } from './common/GlobalStyle'
import styled from 'styled-components'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalContextProvider>
        <AppDiv>
          <Navbar />
          <h1>Buscar peliculas</h1>

          <Main></Main>
        </AppDiv>
      </GlobalContextProvider>
    </>
  )
}

export default App

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Main = styled.main`
  width: 100%;
  text-align: center;
`

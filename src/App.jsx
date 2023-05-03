import { GlobalStyle } from './common/GlobalStyle'
import styled from 'styled-components'
import { MyRoutes } from './routes/routes'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppDiv>
        <MyRoutes />
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

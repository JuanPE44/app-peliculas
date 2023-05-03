import styled from 'styled-components'
import { Header } from '../../components/Header/Header'

export function Home() {
  return (
    <HomeDiv>
      <Header />
    </HomeDiv>
  )
}

const HomeDiv = styled.div`
  width: 100%;
`

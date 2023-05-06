import styled from 'styled-components'
import { RenderSearch } from './RenderSearch'
import { FormSearch } from './FormSearch'

export function NavSearch() {
  return (
    <Nav>
      <FormSearch />
      <div className="search-container">
        <RenderSearch />
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  position: relative;
  min-width: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #10161d;
  padding: 0.6rem;
  border-radius: 0.4rem;

  .search-container {
    position: absolute;
    background: #10161d;
    top: 5rem;
    width: 100%;
    z-index: 100;
    border-radius: 0.4rem;
  }

  p {
    text-align: center;
    font-size: 1rem;
    color: red;
  }
`

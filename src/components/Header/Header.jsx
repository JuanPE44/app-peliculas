import styled from 'styled-components'
import { NavSearch } from '../Search/NavSearch'

export function Header() {
  return (
    <HeaderContainer>
      <ul className="header-ul">
        <li>Inicio</li>
        <li>Peliculas</li>
        <li>Series</li>
      </ul>
      <NavSearch />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: #012;
  padding: 2rem;
  color: #fff;

  .header-ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0;

    li {
      font-size: 1.6rem;
      cursor: pointer;
    }
  }
`

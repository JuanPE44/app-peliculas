import styled from 'styled-components'
import { NavSearch } from '../Search/NavSearch'
import { colors } from '../../common/theme'
import { useSearchContext } from '../../hooks/useSearchContext'
import logo from '../../assets/icono.png'
import { Link } from 'react-router-dom'

export function Header() {
  const { inputRef, setInputActive, inputActive } = useSearchContext()

  return (
    <HeaderContainer>
      <ul className="header-ul">
        <li className="logo-header">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </li>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/peliculas">PELICULAS</Link>
        </li>
        <li>
          <Link to="/series">SERIES</Link>
        </li>
      </ul>
      <NavSearch />
      <SearchOverlay
        onClick={() =>
          setInputActive(inputRef.current === document.activeElement)
        }
        active={inputActive}
      ></SearchOverlay>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    to bottom,
    ${colors.grey} 0,
    rgba(0, 0, 0, 0) 100%
  );
  padding: 1.5rem 4rem;
  color: #fff;
  z-index: 200;

  .header-ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    list-style: none;
    padding: 0;

    .logo-header {
      margin-right: 3rem;
      img {
        height: 5rem;
      }
    }

    li {
      a {
        font-size: 1.6rem;
        font-weight: 600;
        cursor: pointer;

        &:hover {
          color: ${colors.primary};
        }
      }
    }
  }
`

const SearchOverlay = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0008;
  cursor: pointer;
  z-index: 50;
`

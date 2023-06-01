import styled from 'styled-components'
import { RenderSearch } from './RenderSearch'
import { FormSearch } from './FormSearch'
// import { colors } from '../../common/theme'
import { useSearchContext } from '../../hooks/useSearchContext'

export function NavSearch() {
  const { inputRef, setInputActive, inputActive } = useSearchContext()
  return (
    <Nav
      active={inputActive}
      onClick={() =>
        setInputActive(inputRef.current === document.activeElement)
      }
    >
      <FormSearch />
      <div className="search-div">
        <SearchContainer active={inputActive}>
          <RenderSearch />
        </SearchContainer>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  position: relative;
  min-width: 35rem;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.active ? 'center' : 'flex-end')};
  background: ${(props) => (props.active ? '#000e' : 'transparent')};
  color: #fff;
  border-radius: 0.4rem 0.4rem 0 0;
  overflow: visible;
  z-index: 100;

  .search-div {
    position: relative;
    width: 100%;
  }

  p {
    text-align: center;
    font-size: 1rem;
    color: red;
  }
`

const SearchContainer = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
  position: absolute;
  background: ${(props) => (props.active ? '#000e' : 'transparent')};
  width: 100%;
  z-index: 100;
  border-radius: 0 0 0.4rem 0.4rem;
`

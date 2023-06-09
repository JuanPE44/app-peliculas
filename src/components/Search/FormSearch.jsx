import styled from 'styled-components'
import debounce from 'just-debounce-it'
import { IconSvg } from '../../common/icons/IconSvg'
import { SvgSearch, SvgDelete } from '../../common/icons/Svgs'
import { useCallback } from 'react'
import { useSearchContext } from '../../hooks/useSearchContext'
import { useNavigate } from 'react-router-dom'
//import { colors } from '../../common/theme'

export function FormSearch() {
  const {
    search,
    setSearch,
    searchMovies,
    inputRef,
    setInputActive,
    inputActive,
  } = useSearchContext()
  const navigate = useNavigate()

  const debounceSearch = useCallback(
    debounce((search) => {
      searchMovies({ search })
    }, 300),
    []
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${search}`)
    setInputActive(false)
  }

  const handleChange = (e) => {
    let newSearch = e.target.value
    setSearch(newSearch)
    debounceSearch(newSearch)
  }

  const handleClear = () => {
    setSearch('')
  }
  return (
    <Form onSubmit={(e) => handleSubmit(e)} active={inputActive}>
      <div className="icon-search">
        <IconSvg icon={SvgSearch} color={'#fff'} width={2} height={2} />
      </div>
      <input
        onChange={(e) => handleChange(e)}
        onClick={() =>
          setInputActive(inputRef.current === document.activeElement)
        }
        value={search}
        type="text"
        placeholder="Busqueda de Peliculas o Series de TV"
        required
        ref={inputRef}
      />
      <div
        onClick={() => handleClear()}
        style={{ visibility: `${search.length > 0 ? '' : 'hidden'}` }}
      >
        <div className="icon-delete">
          <IconSvg icon={SvgDelete} color={'#fff'} width={1.5} height={1.5} />
        </div>
      </div>
    </Form>
  )
}

const Form = styled.form`
  //width: ${(props) => (props.active ? '100%' : '')};
  display: flex;
  align-items: center;
  gap: 0.4rem;
  overflow: hidden;
  padding: 1rem 1.5rem;
  z-index: 100;
  background: transparent;
  user-select: none;

  .icon-search {
    position: ${(props) => (props.active ? 'relative' : 'absolute')};
  }

  input {
    width: ${(props) => (props.active ? '27rem' : '5rem')};
    flex-grow: 1;
    font-size: 1.7rem;
    padding: 0.5rem;
    border: none;
    outline: none;
    background: transparent;
    color: ${(props) => (props.active ? '#fff' : 'transparent')};
    cursor: ${(props) => (props.active ? '' : 'pointer')};
    text-decoration: none;
    z-index: 100;
    transition: 0.3s;

    &::placeholder {
      color: ${(props) => (props.active ? '#fff' : 'transparent')};
      font-size: 1.4rem;
    }

    &:first-letter {
      text-transform: uppercase;
    }
  }

  .icon-delete {
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
`

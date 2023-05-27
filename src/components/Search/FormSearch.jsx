import styled from 'styled-components'
import debounce from 'just-debounce-it'
import { IconSvg } from '../../common/icons/IconSvg'
import { SvgSearch, SvgDelete } from '../../common/icons/Svgs'
import { useCallback } from 'react'
import { useSearchContext } from '../../hooks/useSearchContext'
import { useNavigate } from 'react-router-dom'
import { colors } from '../../common/theme'

export function FormSearch() {
  const { search, setSearch, searchMovies, inputRef, setInputActive } =
    useSearchContext()
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
    <Form onSubmit={(e) => handleSubmit(e)}>
      <IconSvg icon={SvgSearch} color={'#fff'} width={2} height={2} />
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
        <IconSvg icon={SvgDelete} color={'#fff'} width={1} height={1} />
      </div>
    </Form>
  )
}

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  overflow: hidden;
  padding: 1rem 1.5rem;
  z-index: 100;
  background: transparent;

  input {
    flex-grow: 1;
    font-size: 1.7rem;
    padding: 0.5rem;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;

    &::placeholder {
      color: #fff;
      font-size: 1.4rem;
    }

    &:first-letter {
      text-transform: uppercase;
    }
  }
`

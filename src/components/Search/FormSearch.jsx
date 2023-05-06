import styled from 'styled-components'
import { IconSvg } from '../../common/icons/IconSvg'
import { SvgSearch, SvgDelete } from '../../common/icons/Svgs'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'
import { useSearchContext } from '../../hooks/useSearchContext'
import { useNavigate } from 'react-router-dom'

export function FormSearch() {
  const { search, setSearch, searchMovies, clearSearch } = useSearchContext()
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
    clearSearch()
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
        value={search}
        type="text"
        placeholder="Busqueda de Peliculas o Series de TV"
        required
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
  padding: 0.5rem;

  input {
    flex-grow: 1;
    font-size: 1.7rem;
    padding: 0.5rem;
    border: none;
    outline: none;
    background: #10161d;
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

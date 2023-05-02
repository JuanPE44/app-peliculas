import styled from 'styled-components'
import { IconSvg } from '../../common/icons/IconSvg'
import { SvgSearch } from '../../common/icons/Svgs'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'

export function FormSearch({ search, setSearch, searchMovies }) {
  const debounceSearch = useCallback(
    debounce((search) => {
      console.log('entro', search)
      searchMovies({ search })
    }, 300),
    []
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    searchMovies({ search })
  }

  const handleChange = (e) => {
    let newSearch = e.target.value
    setSearch(newSearch)
    debounceSearch(newSearch)
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
    </Form>
  )
}

const Form = styled.form`
  min-width: 40rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  overflow: hidden;
  border-radius: 10px;
  padding: 0 1rem;

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
    }
  }
`

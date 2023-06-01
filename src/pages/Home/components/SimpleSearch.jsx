import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../../common/theme'

export function SimpleSearch() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${search}`)
  }
  return (
    <FormSearch onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button type="submit">Buscar</button>
    </FormSearch>
  )
}

const FormSearch = styled.form`
  width: 100%;
  display: flex;
  border-radius: 0.4rem;
  overflow: hidden;
  margin-top: 4rem;

  input {
    flex-grow: 1;
    font-size: 1.5rem;
    padding: 1.5rem 2rem;
    outline: none;
    border: none;
  }

  button {
    position: relative;
    left: -0.5rem;
    border: none;
    border-radius: 0.4rem;
    font-size: 1.5rem;
    padding: 1.5rem 2rem;
    background-color: ${colors.primary};
    color: #fff;
    font-weight: 700;
    flex-grow: 0;
  }
`

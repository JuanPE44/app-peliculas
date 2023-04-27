import { RenderMovies } from './components/movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { GlobalContextProvider } from './context/GlobalContext'
import { GlobalStyle } from './common/GlobalStyle'
import styled from 'styled-components'

function App() {
  const { search, setSearch, errorSearch } = useSearch()
  const { movies, searchMovies } = useMovies({ search })

  const handleSubmit = (e) => {
    e.preventDefault()
    searchMovies()
  }

  const handleChange = (e) => {
    let newSearch = e.target.value
    setSearch(newSearch)
    searchMovies(newSearch)
  }

  return (
    <>
      <GlobalStyle />
      <GlobalContextProvider>
        <AppDiv>
          <h1>Buscar peliculas</h1>
          <FormSearch onSubmit={(e) => handleSubmit(e)}>
            <input
              onChange={(e) => handleChange(e)}
              value={search}
              type="text"
              placeholder="Avengers, The las of us, Minions.."
              required
            />
            <button>Buscar</button>
          </FormSearch>

          <main>
            <p>{errorSearch}</p>
            <RenderMovies movies={movies} />
          </main>
        </AppDiv>
      </GlobalContextProvider>
    </>
  )
}

export default App

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormSearch = styled.form`
  display: flex;
  overflow: hidden;
  border-radius: 10px;

  input {
    flex-grow: 1;
    font-size: 1rem;
    padding: 1.2rem;
    border: none;
    outline: none;
    background: #222;
    color: #fff;

    &::placeholder {
      color: #fff;
    }
  }

  button {
    flex-grow: 0;
    border: none;
    padding: 1rem;
    cursor: pointer;
  }
`

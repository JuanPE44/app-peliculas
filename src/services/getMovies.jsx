const API = {
  BASE: 'https://www.omdbapi.com/',
  KEY: '?apikey=da035dcc',
}

export async function getMovies(search) {
  if (search === '') return

  try {
    const response = await fetch(`${API.BASE}${API.KEY}&s=${search}`)
    const json = await response.json()
    const movies = json.Search

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
    }))
  } catch (err) {
    console.log('error fetching movies')
  }
}

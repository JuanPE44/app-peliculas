const API = {
  KEY: 'cb4604b6b4a0cbd010aa159b099d9eb9',
  BASE: 'https://api.themoviedb.org/3/',
  LANGUAJE: 'es-ES',
}

const IMG_URL = 'https://image.tmdb.org/t/p/w220_and_h330_face'

export async function getMovies(search) {
  if (search === '') return

  try {
    const response = await fetch(
      `${API.BASE}search/multi?api_key=${API.KEY}&language=${API.LANGUAJE}&query=${search}&page=1&include_adult=false`
    )
    const json = await response.json()
    const movies = json.results

    return movies?.map((movie) => ({
      id: movie.id,
      title: movie.title ? movie.title : movie.name,
      poster: `${IMG_URL}${movie.poster_path}`,
      year: movie.release_date ? movie.release_date : movie.first_air_date,
    }))
  } catch (err) {
    console.log('error fetching movies')
  }
}

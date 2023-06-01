import { API } from './variablesServices'

export async function getSearch(search) {
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
      poster: `${API.POSTER_URL}${movie.poster_path}`,
      year: movie.release_date ? movie.release_date : movie.first_air_date,
      type: movie.media_type,
    }))
  } catch (err) {
    console.log('error fetching movies')
  }
}

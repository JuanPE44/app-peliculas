import { API } from './variablesServices'

export async function getPopular(type) {
  try {
    const response = await fetch(
      `${API.BASE}${type}/popular/?api_key=${API.KEY}&language=${API.LANGUAJE}`
    )
    const json = await response.json()
    const newMovies = json.results.map((movie) => {
      return {
        id: movie.id,
        title: movie.title ? movie.title : movie.name,
        originalTitle: movie.original_title
          ? movie.original_title
          : movie.original_name,
        poster: `${API.POSTER_URL}${movie.poster_path}`,
        backdrop: `${API.BACKDROP_URL}${movie.backdrop_path}`,
        year: movie.release_date ? movie.release_date : movie.first_air_date,
        genres: movie.genres,
        overview: movie.overview,
        rating: movie.vote_average,
        time: movie.runtime,
        type: type,
      }
    })

    return newMovies
  } catch (err) {
    console.log('error: ' + err.message)
  }
}

import { API } from './variablesServices'

export async function getMovie(postMoviId, type) {
  try {
    const response = await fetch(
      `${API.BASE}${type}/${postMoviId}?api_key=${API.KEY}&language=${API.LANGUAJE}`
    )
    const json = await response.json()
    console.log(json)
    const movie = {
      id: json.id,
      title: json.title ? json.title : json.name,
      originalTitle: json.original_title
        ? json.original_title
        : json.original_name,
      poster: `${API.POSTER_URL}${json.poster_path}`,
      backdrop: `${API.BACKDROP_URL}${json.backdrop_path}`,
      year: json.release_date ? json.release_date : json.first_air_date,
      genres: json.genres,
      overview: json.overview,
      rating: json.vote_average,
      time: json.runtime,
    }
    return movie
  } catch (err) {
    console.log('error fetching movies')
  }
}

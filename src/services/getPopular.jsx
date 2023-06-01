import { API } from './variablesServices'

export async function getPopular(type) {
  try {
    const response = await fetch(
      `${API.BASE}${type}/popular/?api_key=${API.KEY}&language=${API.LANGUAJE}`
    )
    const json = await response.json()
    const newMovies = json.results.map((movies) => {
      return {
        ...movies,
        poster_path: `${API.POSTER_URL}${movies.poster_path}`,
        type: type,
      }
    })

    //id: json.id,
    //title: json.title ? json.title : json.name,
    //poster: `${IMG_URL}${json.backdrop_path}`,
    //year: json.release_date ? json.release_date : json.first_air_date,

    return newMovies
  } catch (err) {
    console.log('error: ' + err.message)
  }
}

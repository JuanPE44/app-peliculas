const API = {
  KEY: 'cb4604b6b4a0cbd010aa159b099d9eb9',
  BASE: 'https://api.themoviedb.org/3/',
  LANGUAJE: 'es-ES',
}

const IMG_URL = 'https://image.tmdb.org/t/p/w220_and_h330_face'

export async function getMovie({ postMoviId, type }) {
  try {
    const response = await fetch(
      `${API.BASE}${type}/${postMoviId}?api_key=${API.KEY}&language=${API.LANGUAJE}`
    )
    const json = await response.json()
    const movie = {
      id: json.id,
      title: json.title ? json.title : json.name,
      poster: `${IMG_URL}${json.poster_path}`,
      year: json.release_date ? json.release_date : json.first_air_date,
    }
    return movie
  } catch (err) {
    console.log('error fetching movies')
  }
}

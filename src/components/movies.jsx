export function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            year={movie.year}
          />
        )
      })}
    </ul>
  )
}

export function Movie({ title, poster, year }) {
  return (
    <li className="movie">
      <h4>{title}</h4>
      <p>{year}</p>
      <img src={poster} alt={title} />
    </li>
  )
}

export function RenderMovies({ movies }) {
  const hasMovies = movies?.length > 0
  return hasMovies ? (
    <ListOfMovies movies={movies} />
  ) : (
    <p>No se encontro la busqueda..</p>
  )
}

import { useParams } from 'react-router-dom'
import { useMovie } from '../../../hooks/useMovie'
import { getYear } from '../../../utilities/getYear'
import { colors } from '../../../common/theme'
import styled from 'styled-components'

export function InfoMovie() {
  const { type, postMoviId } = useParams()
  const { movie } = useMovie({ postMoviId, type })
  const year = movie && getYear(movie.year)

  return (
    <>
      {!movie ? (
        <h1>loading</h1>
      ) : (
        <InfoDiv backdropUrl={movie.backdrop}>
          <div className="poster">
            <img src={movie.poster} />
          </div>
          <div className="contenedor-info">
            <h1>{`${movie.title}(${year})`}</h1>
            <div className="contenedor-generos">
              <div className="fecha">{movie.year}</div>
              <div className="generos">
                {movie.genres.map((gen) => (
                  <span key={gen.id}>{gen.name}</span>
                ))}
              </div>
            </div>

            <h4>{movie.originalTitle}</h4>
            <p>{movie.overview}</p>
          </div>
        </InfoDiv>
      )}
    </>
  )
}

const InfoDiv = styled.div`
  position: relative;
  display: flex;
  gap: 3rem;
  background-image: url(${(props) => props.backdropUrl});
  background-size: cover;
  color: #fff;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: #000b;
    backdrop-filter: blur(10px);
    z-index: 50;
  }

  .poster {
    padding: 3rem 0 3rem 4rem;
    z-index: 100;

    img {
      width: 27rem;
      border-radius: 0.4rem;
    }
  }

  .contenedor-info {
    padding: 3rem 0;
    h1 {
      margin-bottom: 1rem;
      font-size: 3.5rem;
      color: #fff;
    }

    .contenedor-generos {
      display: flex;
      gap: 1rem;
      .fecha {
        font-size: 1.5rem;
      }

      .generos {
        display: flex;
        gap: 1rem;

        span {
          color: ${colors.secondary};
          font-size: 1.5rem;
        }
      }
    }

    h4 {
      margin-top: 2rem;
      font-size: 2.5rem;
      color: ${colors.primary};
    }

    p {
      max-width: 50rem;
      margin-top: 2rem;
      font-size: 1.6rem;
      padding-right: 2rem;
      text-align: justify;
    }
    z-index: 100;
  }
`

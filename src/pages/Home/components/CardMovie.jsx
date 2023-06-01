import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { getYear } from '../../../utilities/getYear'
import { colors } from '../../../common/theme'

export function CardMovie({ id, title, poster, date, type }) {
  const year = getYear(date)

  return (
    <MovieLink to={`/${type}/${id}`}>
      <img src={poster} alt={title} loading="lazy" />
      <div className="info-container">
        <div className="year">{year}</div>
        <h2 className="title">{title}</h2>
      </div>
    </MovieLink>
  )
}

const MovieLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-radius: 0.4rem;
  overflow: hidden;

  &:hover {
    background: ${colors.black};
  }

  img {
    flex-grow: 0;
    object-fit: cover;
  }

  .info-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, #000 100%);

    .year {
      background-color: rgba(255, 255, 255, 0.7);
      color: #000;
      font-size: 1.1rem;
      font-weight: 700;
      border-radius: 1rem;
      margin: 1rem;
      padding: 0 0.5rem;
    }

    .title {
      font-size: 1.2rem;
      color: #fff;
      font-weight: 700;
      margin: 1rem;
    }
  }
`

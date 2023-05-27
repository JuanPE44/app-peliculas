import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { getYear } from '../../utilities/getYear'
import { colors } from '../../common/theme'

export function Movie({ id, title, poster, date, type }) {
  const handleClick = () => {}
  const year = getYear(date)

  return (
    <MovieLi className="movie" onClick={() => handleClick()}>
      <Link to={`/${type}/${id}`}>
        <img src={poster} alt={title} loading="lazy" />
        <div className="info-container">
          <div className="title">{`${title} (${year})`}</div>
        </div>
      </Link>
    </MovieLi>
  )
}

const MovieLi = styled.li`
  width: 22rem;
  height: 100%;
  gap: 1rem;
  text-align: center;
  border-radius: 0.4rem;
  overflow: hidden;
  color: #fff;
  cursor: pointer;
  text-align: left;
  background: ${colors.primary};
  transition: 0.3s;

  &:hover {
    background: ${colors.black};
  }

  a {
    height: 100%;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    img {
      min-height: 33rem;
      flex-grow: 0;
      object-fit: cover;
    }

    .info-container {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      .title {
        color: #fff;
        padding: 1rem;
        font-size: 1.4rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
      }
    }
  }
`

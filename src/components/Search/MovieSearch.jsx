import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSearchContext } from '../../hooks/useSearchContext'
import { getYear } from '../../utilities/getYear'
import { colors } from '../../common/theme'

export function MovieSearch({ id, title, poster, date, type }) {
  const { setInputActive } = useSearchContext()
  const year = getYear(date)

  const handleClick = () => {
    setInputActive(false)
  }

  return (
    <MovieLi
      className="movie"
      to={`/${type}/${id}`}
      onClick={() => handleClick()}
    >
      <img src={poster} alt={title} loading="lazy" />
      <div>
        <div className="title">{title}</div>
        <div className="year">{year}</div>
      </div>
    </MovieLi>
  )
}

const MovieLi = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: center;
  border-radius: 0.4rem;
  overflow: hidden;
  color: #fff;
  padding: 0.5rem;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: ${colors.primary};
  }

  .title {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .year {
    font-size: 1.3rem;
    color: ${colors.secondary};
  }

  img {
    width: 4.5rem;
    height: 6.5rem;
    object-fit: cover;
  }
`

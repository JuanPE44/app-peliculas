import styled from 'styled-components'

export function SearchMovie({ title, poster, year }) {
  return (
    <MovieLi className="movie">
      <img src={poster} alt={title} loading="lazy" />
      <div>
        <div className="title">{title}</div>
        <div className="year">{year}</div>
      </div>
    </MovieLi>
  )
}

const MovieLi = styled.li`
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

  &:hover {
    background: #222;
  }

  .title {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .year {
    font-size: 1.3rem;
    color: #b9bdcc;
  }

  img {
    width: 4rem;
    height: 6.5rem;
    object-fit: cover;
  }
`

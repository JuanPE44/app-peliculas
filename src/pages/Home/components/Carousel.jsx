import Slider from 'react-slick'
import styled from 'styled-components'
import { CardMovie } from './CardMovie'
import { colors } from '../../../common/theme'
import { useGlobalContext } from '../../../hooks/useGlobalContext'
import { usePopular } from '../../../hooks/usePopular'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function Carousel({ type }) {
  const { elementsToShow } = useGlobalContext()
  const { popularMovies } = usePopular(type)
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: popularMovies && elementsToShow,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  }
  return (
    <>
      {popularMovies && (
        <SliderDiv {...settings}>
          {popularMovies.map((movie) => (
            <CardMovie
              key={movie.id}
              id={movie.id}
              poster={movie.poster}
              title={movie.title}
              date={movie.year}
              type={movie.type}
            />
          ))}
        </SliderDiv>
      )}
    </>
  )
}

const SliderDiv = styled(Slider)`
  .slick-slide {
    width: 100%;
    padding: 0.5rem;
  }

  .slick-prev,
  .slick-next {
    height: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 2.5rem;
    z-index: 100;

    &:before {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 3rem;
    }
  }

  .slick-prev {
    background: linear-gradient(
      to right,
      ${colors.grey} 0,
      rgba(0, 0, 0, 0) 100%
    );
    left: 0;
  }

  .slick-next {
    background: linear-gradient(
      to left,
      ${colors.grey} 0,
      rgba(0, 0, 0, 0) 100%
    );
    right: 0;
  }
`

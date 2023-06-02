import { usePopular } from '../../../hooks/usePopular'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CardMovie } from './CardMovie'
import styled from 'styled-components'
import { colors } from '../../../common/theme'

export function Carousel({ type }) {
  const { popularMovies } = usePopular(type)

  const settings = {
    dots: false, // Mostrar los puntos de navegación
    infinite: false, // Navegación infinita
    speed: 500, // Velocidad de desplazamiento (en milisegundos)
    slidesToShow: 5, // Cantidad de elementos a mostrar por vez
    slidesToScroll: 1, // Cantidad de elementos a desplazar por vez
    autoplay: true, // Activar la reproducción automática
    autoplaySpeed: 3000, // Tiempo de espera automático (en milisegundos)
  }
  return (
    <SliderDiv {...settings}>
      {popularMovies &&
        popularMovies.map((movie) => (
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

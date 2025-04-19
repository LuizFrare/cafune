"use client"
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Card } from '../../molecules';
import { CardData } from './data';
import * as S from './styles';


export const Enviroments = () => {
  const [sliderRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 1280px)': {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
      '(max-width: 1024px)': {
        slides: {
          perView: 2.2,
          spacing: 16,
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: 1.7,
          spacing: 12,
        },
      },
      '(max-width: 540px)': {
        slides: {
          perView: 1.2,
          spacing: 12,
        },
      },
    },
  });

  return (
    <S.Wrapper>
      <S.SectionDescription>Categorias</S.SectionDescription>
      <S.Title>Programa para capacitar outras pessoas</S.Title>
      <S.CardWrapper ref={sliderRef} className='keen-slider'>
        {CardData.map(({ icon, title, description }) => (
          <div className='keen-slider__slide' key={title}>
            <Card icon={icon} title={title} description={description} />
          </div>
        ))}
      </S.CardWrapper>
    </S.Wrapper>
  );
};

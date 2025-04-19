"use client"
import { useKeenSlider } from 'keen-slider/react';
import { Campaigns } from '../../molecules';
import { campaignsData } from './data';
import * as S from './styles';

export const ShowCampaign = () => {
  const [sliderRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 3.2,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 1280px)': {
        slides: {
          perView: 2.5,
          spacing: 16,
        },
      },
      '(max-width: 1024px)': {
        slides: {
          perView: 1.9,
          spacing: 16,
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: 1.3,
          spacing: 16,
        },
      },
      '(max-width: 540px)': {
        slides: {
          perView: 1.15,
          spacing: 0,
        },
      },
      '(max-width: 470px)': {
        slides: {
          perView: 1.13,
          spacing: 6,
        },
      },
    },
  });

  return (
    <S.Wrapper>
      <S.SectionDescription>Campanhas</S.SectionDescription>
      <S.Title>Apresente sua Campanha</S.Title>
      <S.CampaignsContainer ref={sliderRef} className='keen-slider'>
        {campaignsData.map((campaign) => (
          <div className='keen-slider__slide' key={campaign.title}>
            <Campaigns {...campaign} />
          </div>
        ))}
      </S.CampaignsContainer>
    </S.Wrapper>
  );
};

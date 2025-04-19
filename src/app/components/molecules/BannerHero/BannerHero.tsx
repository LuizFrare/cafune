import { Banner, Button } from '../../atoms';
import * as S from './styles';

export const BannerHero = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Banner
          fallbackSrc='/BannerHero.png'
          alt='Banner principal'
          sources={[
            {
              media: '(max-width: 767px)',
              srcSet: '/BannerHero-mobile.png',
            },
            {
              media: '(min-width: 768px)',
              srcSet: '/BannerHero.png',
            },
          ]}
        />
        <S.Informatives>
          <S.Title>
            Faça a diferença <br /> com um simples <br /> Cafuné.
          </S.Title>
          <S.Description>
            Conectamos ONGs a voluntários <br /> prontos para transformar o
            mundo <br /> com pequenos gestos.
          </S.Description>
          <S.ButtonWrapper>
            <Button variant='secondary'>Quero ajudar</Button>
          </S.ButtonWrapper>
        </S.Informatives>
      </S.Wrapper>
    </S.Container>
  );
};

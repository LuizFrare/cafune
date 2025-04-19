import { Banner } from '../../atoms';
import * as S from './styles';

export const AboutUs = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Informatives>
          <S.SectionDescription>Sobre nós</S.SectionDescription>
          <S.Title>
            Ajudar nunca <span>foi tão humano.</span>
          </S.Title>
          <S.Description>
            O Cafuné nasceu do simples desejo de conectar quem quer ajudar a
            quem precisa de ajuda. Acreditamos que pequenos gestos podem
            transformar realidades – e queremos facilitar esse encontro.
          </S.Description>
          <S.Description>
            Aqui, ONGs encontram voluntários apaixonados, e pessoas descobrem
            como doar seu tempo com propósito. Juntos, fazemos o bem acontecer. 
          </S.Description>
        </S.Informatives>
        <Banner
          fallbackSrc='/AboutUs.png'
          alt='Banner sobre nós'
          sources={[
            {
              media: '(max-width: 767px)',
              srcSet: '/AboutUs-Mobile.png',
            },
            {
              media: '(min-width: 768px)',
              srcSet: '/AboutUs.png',
            },
          ]}
        />
      </S.Wrapper>
    </S.Container>
  );
};

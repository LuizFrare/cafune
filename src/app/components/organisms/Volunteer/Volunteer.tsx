import { Banner } from '../../atoms';
import * as S from './styles';
export const Volunteer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Banner
          fallbackSrc='/Volunteer.png'
          alt='Banner voluntário'
          sources={[
            {
              media: '(max-width: 767px)',
              srcSet: '/Volunteer-Mobile.png',
            },
            {
              media: '(min-width: 768px)',
              srcSet: '/Volunteer.png',
            },
          ]}
        />
      </S.Wrapper>
    </S.Container>
  );
};

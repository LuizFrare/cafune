import { Button } from '../../atoms';
import ProgressBar from '../../atoms/ProgressBar/ProgressBar';
import * as S from './styles';
import { CampaignsProps } from './types';

export const Campaigns = ({
  title,
  description,
  progress,
  img,
  alt,
  tag,
}: CampaignsProps) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={img} alt={alt} />
        <S.Tag>{tag}</S.Tag>
      </S.ImageContainer>
      <S.Wrapper>
        <S.TextContainer>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.TextContainer>
        <ProgressBar progress={progress} height='0.5rem' />
        <Button variant='campaign'>Faça sua Doação</Button>
      </S.Wrapper>
    </S.Container>
  );
};

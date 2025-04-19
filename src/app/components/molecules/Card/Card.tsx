'use client';
import { Button, CardCircle } from '../../atoms';
import { CardProps } from './types';
import * as S from './styles';

export const Card = ({ icon, title, description }: CardProps) => {
  return (
    <S.Card>
      <CardCircle icon={icon} />
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDescription>{description}</S.CardDescription>
      <Button variant='card'>Quero ajudar</Button>
    </S.Card>
  );
};

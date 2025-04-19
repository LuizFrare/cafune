'use client';
import * as S from './styles';
import { CardCircleProps } from './types';

export const CardCircle = ({ icon }: CardCircleProps) => {
  console.log(icon);
  return (
    <S.CardCircle>
      {icon}
    </S.CardCircle>
  );
};

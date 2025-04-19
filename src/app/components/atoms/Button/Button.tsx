'use client';
import { ButtonProps } from './types';
import * as S from './styles';
import { Arrow45 } from '../../../../../public/Arrow45';

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return (
    <S.StyledButton variant={variant} {...props}>
      {variant === 'card' ? (
        <S.ButtonWrapper>
          {props.children} <Arrow45 />
        </S.ButtonWrapper>
      ) : (
        props.children
      )}
    </S.StyledButton>
  );
};

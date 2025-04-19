'use client';
import styled, { css } from 'styled-components';
import { ButtonProps } from './types';

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: none;

  ${({ variant }) => variantStyles[variant || 'primary']}

  &:disabled {
    background-color: #a0a0a0;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const variantStyles = {
  primary: css`
    background-color: #c4e839;
    color: #1a1a1a;

    &:hover {
      background-color: #b0d72a;
    }

    &:active {
      background-color: #9fc722;
    }
  `,

  secondary: css`
    background-color: #121e36;
    color: #fff;

    &:hover {
      background-color: #c4e839;
      border: 1px solid #1a1a1a;
      color: #1a1a1a;
    }

    &:active {
      background-color: #444;
    }
  `,

  outline: css`
    background: transparent;
    border: 2px solid #c4e839;
    color: #c4e839;

    &:hover {
      background-color: rgba(196, 232, 57, 0.1);
    }

    &:active {
      background-color: rgba(196, 232, 57, 0.2);
    }
  `,

  card: css`
    background: #121e36;
    color: #fff;
    border: 3px solid #d2d1d7;
    border-radius: 3.125rem;

    svg {
      transform: rotate(0deg);
      transition: transform 0.4s ease;
    }

    &:hover {
      color: #b0d72a;

      svg {
        transform: rotate(45deg);
      }
    }

    &:active {
      color: #9fc722;
    }
  `,

  campaign: css`
    background: #b0d72a;
    color: #121e36;
    font-weight: bold;
    outline: 3px solid rgba(176, 215, 42, 0.4);
    border-radius: 3.125rem;

    &:hover {
      color: #fff;
      outline: 3px solid rgba(255, 255, 255);
      background-color: #121e36;
    }
  `,
};

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

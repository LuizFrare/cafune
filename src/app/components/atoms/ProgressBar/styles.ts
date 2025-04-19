'use client';

import styled from 'styled-components';
import { ProgressBarProps } from './types';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`;

export const Container = styled.div<
  Pick<ProgressBarProps, 'height' | 'backgroundColor' | 'borderRadius'>
>`
  width: 100%;
  background-color: ${({ backgroundColor = '#e0e0e0' }) => backgroundColor};
  height: ${({ height = '1rem' }) => height};
  border-radius: ${({ borderRadius = '0.5rem' }) => borderRadius};
  overflow: hidden;
`;

export const Filler = styled.div<
  Pick<ProgressBarProps, 'progress' | 'fillColor'>
>`
  width: ${({ progress }) => `${Math.min(Math.max(progress, 0), 100)}%`};
  background-color: ${({ fillColor = '#b0d72a' }) => fillColor};
  height: 100%;
  transition: width 0.3s ease-in-out;
`;

export const ProgressText = styled.span`
  font-size: 0.75rem;
  font-weight: 300;
  color: #fff;
`;

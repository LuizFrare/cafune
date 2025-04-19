'use client';

import styled from 'styled-components';
export const Card = styled.div`
  padding: 2.5rem;
  border: 1px solid #121e36;
  border-radius: 3.125rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  align-items: center;
  justify-content: center;
  background: #fff;
  transition: all 0.3s ease;
  width: 19.375rem;

  &:hover {
    transform: translateY(-4px) scale(1.015);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-color: #b0d72a;
  }
`;
export const CardTitle = styled.h3`
  color: #121e36;
  font-size: 2rem;
  max-width: 14.3125rem;
  font-weight: bold;
  text-align: center;
`;

export const CardDescription = styled.p`
  color: #121e36;
  font-size: 1.25rem;
  font-weight: 400;
  text-align: center;
  max-width: 196px;
`;

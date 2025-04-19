'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #121e36;
  border-radius: 50px;
  align-items: center;
  transition: all 0.3s ease;
  width: 25rem;

  &:hover {
    transform: translateY(-4px) scale(1.015);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 21rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.5rem 2.5rem;
  gap: 2rem;
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: 600;
  font-size: 2rem;
  max-width: 19.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  color: #fff;
  font-weight: 300;
  font-size: 1rem;
  max-width: 18.375rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 25rem;
  height: auto;
  border-radius: 40px;

  @media (max-width: 768px) {
    max-width: 22rem;
  }
`;

export const Tag = styled.span`
  position: absolute;
  bottom: -2.2rem;
  z-index: 3;
  background: #b0d72a;
  padding: 0.625rem 1rem;
  color: #121e36;
  font-weight: bold;
  outline: 3px solid rgba(176, 215, 42, 0.4);
  border-radius: 3.125rem;
  transform: translateY(-50%);
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  position: relative;
  gap: 1rem;
`;

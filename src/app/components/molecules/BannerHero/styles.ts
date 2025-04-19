'use client';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 0 auto;
  background-color: #c4e839;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  max-width: 90rem;
`;

export const Informatives = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  top: 50%;
  left: 20%;
  margin: 0 1.5rem;
  transform: translate(-50%, -50%);
  z-index: 2;

  @media (max-width: 768px) {
    top: 32%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    margin: 0;
    gap: 1rem;
  }
`;

export const Title = styled.h2`
  color: #121e36;
  font-size: 3rem;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  color: #121e36;
  font-size: 1.5rem;
  letter-spacing: -5%;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 11.875rem;
  height: 3.25rem;

  button {
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 10.09375rem;
    height: 2.7625rem;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

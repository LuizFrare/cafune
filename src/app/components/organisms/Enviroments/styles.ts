'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    align-items: start;
  }
`;

export const SectionDescription = styled.p`
  position: relative;
  color: #121e36;
  font-size: 1.75rem;
  max-width: 61.125rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 0.5rem;
  cursor: default;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 70%;
    height: 4px;
    background-color: #b0d72a;
    border-radius: 2px;
    transition: width 0.3s ease, box-shadow 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem 0.5rem 1rem;
    text-align: start;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    &::after {
      left: 12%;
      transform: none;
      width: 50%;
    }

    &:hover::after {
      width: 80%;
    }
  }
`;

export const Title = styled.h2`
  color: #121e36;
  font-size: 3rem;
  max-width: 61.125rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    max-width: 22rem;
    padding: 0 1rem;
    text-align: start;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  max-width: 90rem;
  width: 100%;
  padding: 1rem;
  margin: 2rem auto;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

'use client';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 0 auto;
  background-color: #121e36;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 48.9375rem;
  align-items: center;
  max-width: 90rem;
  margin: 2rem 0;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`;

export const Informatives = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  top: 15%;
  right: 5%;
  margin: 0 1.5rem;
  z-index: 2;

  @media (max-width: 1440px) {
    right: 15%;
  }

  @media (max-width: 1024px) {
    right: 23%;
  }

  @media (max-width: 768px) {
    top: 0;
    width: 100%;
    left: 50%;
    transform: translate(-50%);
    margin: 0;
    padding: 0 2rem;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 4rem;
  font-weight: bold;
  max-width: 31.75rem;

  @media (max-width: 1440px) {
    font-size: 3rem;
    max-width: 23rem;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
    max-width: 16rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    max-width: 24rem;
  }

  span {
    color: #b0d72a;
  }
`;

export const Description = styled.p`
  color: #fff;
  font-size: 1.4rem;
  max-width: 33.125rem;
  text-align: justify;
  font-weight: 300;

  @media (max-width: 1440px) {
    font-size: 1.25rem;
    max-width: 22rem;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
    max-width: 22rem;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const SectionDescription = styled.p`
  position: relative;
  color: #fff;
  font-size: 1.75rem;
  max-width: 61.125rem;
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 0.5rem;
  cursor: default;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4px;
    width: 17.5%;
    background-color: #b0d72a;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 30%;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

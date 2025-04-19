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

export const CampaignsContainer = styled.div`
  display: flex;
  max-width: 90rem;
  padding: 0 2.5rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 1rem;
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
    padding-left: 1rem;
    text-align: left;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 39%;
      height: 4px;
      width: 50%;
      background-color: #b0d72a;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 50%;
    }
  }
`;

export const Title = styled.h2`
  color: #121e36;
  font-size: 4.5rem;
  max-width: 32rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    max-width: 22rem;
    text-align: start;
    padding-left: 1rem;
  }
`;

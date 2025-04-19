'use client';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 0 auto;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  max-width: 90rem;
`;

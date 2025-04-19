'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  margin: 3.25rem 0;
  z-index: 3;

  @media (max-width: 1024px) {
    margin: 1.5rem 0;
  }
`;

export const Header = styled.header`
  width: 100%;
  margin: 0 1.5rem;
  background-color: #121e36;
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  max-width: 87.5rem;
  align-items: center;
  justify-content: space-between;
  height: 5.0625rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 0 2px 20px rgba(0, 0, 0, 0.1);

  button {
    font-size: 16px;
  }
`;

export const Logo = styled.div`
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 3.125rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }
`;

export const Link = styled.a<{ active?: boolean }>`
  color: #${({ active }) => (active ? 'c4e839' : 'fff')};
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 1024px) {
    gap: 1.5rem;
    font-size: 12px;
  }

  &:hover {
    color: #c4e839;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background-color: #c4e839;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const DesktopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 3.125rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  color: #fff;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const ButtonWrapper = styled.div`
  @media (max-width: 1024px) {
    button {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  background-color: #121e36;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  width: calc(100% - 3rem);
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  @media (min-width: 769px) {
    display: none;
  }
`;

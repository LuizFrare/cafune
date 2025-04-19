'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background: radial-gradient(
    86.17% 86.17% at 51.58% 13.83%,
    #223761 0%,
    #121e36 100%
  );
  border-radius: 2rem;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;
  margin: 5.25rem auto 0rem auto;
  border-radius: 0 2rem;
`;

export const MarginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 81.25rem;
  gap: 2rem;
  margin: 5.25rem auto 4rem auto;
  padding: 0 2.5rem;
  border-radius: 2rem;

  @media (max-width: 768px) {
    margin: 3rem auto 2rem auto;
    padding: 0 1rem;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  max-width: 34rem;

  span {
    color: #b0d72a;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const Container = styled.footer`
  border-radius: 2rem;
  padding: 3rem 2rem;
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;
  color: white;
  background-image: url('/Footer.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    background-image: url('/Footer-Mobile.png');
    background-size: inherit;
    background-position: inherit;
    background-repeat: inherit;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BrandSection = styled.div`
  display: flex;
  align-items: center;
`;

export const LinksSection = styled.div`
  display: flex;
  margin-top: 9rem;
  flex-wrap: wrap;
  max-width: 70.125rem;
  gap: 2rem;
  justify-content: space-between;
  width: 100%;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 48px 80px 36px;
  background: rgba(82, 82, 82, 0.17);
  border-radius: 25px;

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding: 2rem;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const LinkTitle = styled.span`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #8d8d8d;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const Link = styled.a`
  font-size: 0.875rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const BottomInfo = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.75rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TopInfo = styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.75rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  a {
    color: #fff;
    opacity: 0.8;
    text-decoration: none;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }
`;

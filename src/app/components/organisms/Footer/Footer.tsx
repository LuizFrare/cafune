'use client';

import Image from 'next/image';
import { Button } from '../../atoms';
import * as S from './styles';

export const Footer = () => {
  return (
    <S.MarginWrapper>
      <S.Wrapper>
        <S.Container>
          <S.TextWrapper>
            <S.Title>
              Faça parte agora <span>da nossa equipe</span>
            </S.Title>
            <Button variant='campaign'>Quero ajudar</Button>
          </S.TextWrapper>
          <S.Content>
            <S.BrandSection></S.BrandSection>
            <S.LinksWrapper>
              <S.LinksSection>
                <S.TopInfo>
                  <Image
                    src='/LogoWhite.png'
                    alt='Logo Branca'
                    width={164}
                    height={32}
                  />
                </S.TopInfo>
                <S.LinkGroup>
                  <S.LinkTitle>Redes Sociais</S.LinkTitle>
                  <S.Link href='#'>Youtube</S.Link>
                  <S.Link href='#'>Instagram</S.Link>
                  <S.Link href='#'>LinkedIn</S.Link>
                  <S.Link href='#'>Twitter</S.Link>
                </S.LinkGroup>

                <S.LinkGroup>
                  <S.LinkTitle>Fique ligado</S.LinkTitle>
                  <S.Link href='#'>Sobre Nós</S.Link>
                  <S.Link href='#'>Updates</S.Link>
                </S.LinkGroup>

                <S.LinkGroup>
                  <S.LinkTitle>Contato</S.LinkTitle>
                  <S.Link href='#'>Fale conosco</S.Link>
                  <S.Link href='#'>Comunicação</S.Link>
                </S.LinkGroup>

                <S.LinkGroup>
                  <S.LinkTitle>Acompanhar</S.LinkTitle>
                  <S.Link href='#'>Cadastrar</S.Link>
                  <S.Link href='#'>Entrar</S.Link>
                </S.LinkGroup>
                <S.BottomInfo>
                  <p>© 2025 Cafuné, Inc. • </p>
                  <S.FooterLinks>
                    <a href='#'>Conformidade</a>
                    <a href='#'>Privacidade</a>
                    <a href='#'>Segurança</a>
                    <a href='#'>Termos</a>
                  </S.FooterLinks>
                </S.BottomInfo>
              </S.LinksSection>
            </S.LinksWrapper>
          </S.Content>
        </S.Container>
      </S.Wrapper>
    </S.MarginWrapper>
  );
};

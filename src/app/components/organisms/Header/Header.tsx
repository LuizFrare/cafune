'use client';
import { useState } from 'react';
import Image from 'next/image';
import * as S from './styles';
import { Button } from '../../atoms';
import { Hamburguer } from '../../../../../public/Hamburguer';

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo>
          <Image src='/Logo.png' alt='Cafuné Logo' width={100} height={24} />
        </S.Logo>

        <S.DesktopLinks>
          <S.Link active>Home</S.Link>
          <S.Link>Sobre nós</S.Link>
          <S.Link>Categorias</S.Link>
          <S.Link>Campanhas</S.Link>
          <S.Link>Voluntários</S.Link>
        </S.DesktopLinks>

        <S.MobileMenuIcon onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <Hamburguer width={20} height={9} /> : <Hamburguer />}
        </S.MobileMenuIcon>

        <S.ButtonWrapper>
          <Button variant='primary' onClick={() => console.log('Clicado!')}>
            Acesse sua conta
          </Button>
        </S.ButtonWrapper>
      </S.Header>

      {isMobileMenuOpen && (
        <S.MobileLinks>
          <S.Link active>Home</S.Link>
          <S.Link>Sobre nós</S.Link>
          <S.Link>Categorias</S.Link>
          <S.Link>Campanhas</S.Link>
          <S.Link>Voluntários</S.Link>
        </S.MobileLinks>
      )}
    </S.Wrapper>
  );
};

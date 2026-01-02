import React, { useState, useEffect } from 'react';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavMenu,
  NavItem,
  NavLink,
  MobileMenuButton,
  MobileMenu,
  ContactButton,
} from './Header.styles';
import { Button } from '../../styles/GlobalStyle';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection: scrollToSectionHook } = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    scrollToSectionHook(sectionId);
    closeMenu();
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <div className="container">
        <Nav>
          <Logo onClick={() => scrollToSection('inicio')}>
            <img src="/src/assets/nc_logo.svg" alt="Natália Cruz" />
          </Logo>

          <NavMenu>
            <NavItem>
              <NavLink onClick={() => scrollToSection('inicio')}>Início</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollToSection('sobre')}>Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollToSection('servicos')}>Serviços</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollToSection('depoimentos')}>Depoimentos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollToSection('contato')}>Contato</NavLink>
            </NavItem>
          </NavMenu>

          <ContactButton>
            <Button variant='light' onClick={() => scrollToSection('contato')}>
              Agendar Consulta
            </Button>
          </ContactButton>

          <MobileMenuButton onClick={toggleMenu} isOpen={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuButton>
        </Nav>

        <MobileMenu isOpen={isMenuOpen}>
          <NavItem>
            <NavLink onClick={() => scrollToSection('inicio')}>Início</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection('sobre')}>Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection('servicos')}>Serviços</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection('depoimentos')}>Depoimentos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection('contato')}>Contato</NavLink>
          </NavItem>
          <NavItem>
            <Button onClick={() => scrollToSection('contato')} size="large">
              Agendar Consulta
            </Button>
          </NavItem>
        </MobileMenu>
      </div>
    </HeaderContainer>
  );
};

export default Header;
import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ isScrolled }) => 
    isScrolled ? 'rgba(139, 149, 86, 0.95)' : 'rgba(139, 149, 86, 0.9)'}; //rgb(139 149 86)
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: ${({ isScrolled }) => 
    isScrolled ? theme.shadows.medium : 'none'};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.sm} 0;
  position: relative;
`;

export const Logo = styled.div`
  cursor: pointer;
  
  span {
    font-family: ${theme.fonts.heading};
    font-size: 1.5rem;
    font-weight: 700;
    color: ${theme.colors.cream};
    transition: all 0.3s ease;
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 1.25rem;
    }
    
    &:hover {
      color: ${theme.colors.white};
      transform: scale(1.05);
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  position: relative;
`;

export const NavLink = styled.a`
  color: ${theme.colors.cream};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${theme.colors.white};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${theme.colors.white};
    
    &::after {
      width: 100%;
    }
  }
`;

export const ContactButton = styled.div`
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
  }
  
  span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: ${theme.colors.text.primary};
    margin-bottom: 5px;
    transition: 0.3s;
    transform-origin: 3px 1px;
    
    &:first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    
    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  padding: ${theme.spacing.lg};
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  flex-direction: column;
  gap: ${theme.spacing.md};
  box-shadow: ${theme.shadows.medium};
  border-radius: 0 0 16px 16px;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
  
  ${NavItem} {
    text-align: center;
  }
  
  ${NavLink} {
    display: block;
    padding: ${theme.spacing.xs} 0;
    font-size: 1.125rem;
  }
`;
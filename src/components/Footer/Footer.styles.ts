import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, 
    ${theme.colors.primaryDark} 0%, 
    ${theme.colors.primary} 100%);
  color: ${theme.colors.white};
  padding: ${theme.spacing.xxl} 0 ${theme.spacing.lg} 0;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};
  width: 100%;
  justify-items: center;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    justify-items: start;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const FooterTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.white};
`;

export const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  
  strong {
    color: ${theme.colors.white};
  }
`;

export const FooterList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

export const FooterItem = styled.li`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-weight: 400;
    position: relative;
    transition: all 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${theme.colors.cream};
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: ${theme.colors.cream};
      
      &::after {
        width: 100%;
      }
    }
  }
`;

export const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${theme.colors.white};
    text-decoration: underline;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${theme.spacing.md};
    text-align: center;
  }
`;

export const FooterCopyright = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
`;

export const FooterSocial = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-size: 1.125rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;
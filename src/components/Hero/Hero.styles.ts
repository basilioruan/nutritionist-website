import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeroContainer = styled.section`
  min-height: 100vh;
  padding-top: 80px;
  background: linear-gradient(135deg, 
    ${theme.colors.accent} 0%, 
    rgba(255, 255, 255, 0.9) 50%, 
    ${theme.colors.gray.light} 100%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234CAF50' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    z-index: 0;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: ${theme.spacing.xxl};
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 600px;
  
  @media (min-width: ${theme.breakpoints.xlDesktop}) {
    gap: 4rem;
    min-height: 700px;
  }
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    min-height: 500px;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
    text-align: center;
    min-height: auto;
  }
`;

export const HeroText = styled.div`
  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 2;
  }
`;

export const HeroSubtitle = styled.p`
  color: ${theme.colors.primary};
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: ${theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.text.primary};
  
  span {
    color: ${theme.colors.primary};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary});
      border-radius: 2px;
    }
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.xl};
  max-width: 600px;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    margin: 0 auto ${theme.spacing.xl} auto;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroImageContainer = styled.div`
  position: relative;
  max-width: 450px;
  margin: 0 auto;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 1;
    max-width: 300px;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 250px;
  }
`;

export const HeroImage = styled.div`
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: ${theme.shadows.heavy};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
    border-radius: 20px;
    z-index: -1;
    opacity: 0.3;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: 30px;
    bottom: 30px;
    background: linear-gradient(45deg, ${theme.colors.secondary}, ${theme.colors.accent});
    border-radius: 20px;
    z-index: -2;
    opacity: 0.2;
  }
`;
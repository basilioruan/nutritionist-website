import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ServicesContainer = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background: linear-gradient(135deg, 
    ${theme.colors.gray.light} 0%, 
    rgba(255, 255, 255, 0.8) 50%, 
    ${theme.colors.accent} 100%);
`;

export const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
`;

export const ServicesSubtitle = styled.p`
  color: ${theme.colors.primary};
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: ${theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.3;
  
  span {
    color: ${theme.colors.primary};
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.75rem;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.xl};
  width: 100%;
  
  @media (min-width: ${theme.breakpoints.xlDesktop}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

export const ServiceCard = styled.div`
  background: ${theme.colors.white};
  padding: ${theme.spacing.xl};
  border-radius: 16px;
  box-shadow: ${theme.shadows.light};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary});
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.heavy};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
  }
`;

export const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${theme.spacing.md};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, 
    rgba(76, 175, 80, 0.1), 
    rgba(129, 199, 132, 0.1));
  border-radius: 50%;
  margin: 0 auto ${theme.spacing.md} auto;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
  text-align: center;
`;

export const ServiceDescription = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
  text-align: center;
`;

export const ServiceFeatures = styled.ul`
  list-style: none;
`;

export const ServiceFeature = styled.li`
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.xs};
  padding-left: ${theme.spacing.sm};
  position: relative;
  font-size: 0.95rem;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${theme.colors.primary};
    font-weight: bold;
  }
`;
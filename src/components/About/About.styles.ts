import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const AboutContainer = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background-color: ${theme.colors.white};
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  gap: ${theme.spacing.xxl};
  align-items: center;
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
    min-height: auto;
  }
`;

export const AboutImageContainer = styled.div`
  position: relative;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 1;
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const AboutImage = styled.div`
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: ${theme.shadows.medium};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    right: 15px;
    bottom: 15px;
    background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
    border-radius: 16px;
    z-index: -1;
    opacity: 0.2;
  }
`;

export const AboutText = styled.div`
  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 2;
    text-align: center;
  }
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.text.primary};
  line-height: 1.3;
  
  span {
    color: ${theme.colors.primary};
    font-weight: 400;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.75rem;
  }
`;

export const AboutDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const QualificationsList = styled.ul`
  margin: ${theme.spacing.lg} 0;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    text-align: left;
    display: inline-block;
  }
`;

export const QualificationItem = styled.li`
  font-size: 1rem;
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.xs};
  padding-left: ${theme.spacing.sm};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    background-color: ${theme.colors.primary};
    border-radius: 50%;
  }
`;

export const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.sm};
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: ${theme.spacing.md};
  background: linear-gradient(135deg, 
    ${theme.colors.gray.light}, 
    rgba(76, 175, 80, 0.05));
  border-radius: 12px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${theme.colors.text.secondary};
  font-weight: 500;
  margin-top: ${theme.spacing.xs};
`;
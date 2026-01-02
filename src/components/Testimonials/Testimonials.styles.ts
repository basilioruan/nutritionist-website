import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const TestimonialsContainer = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background-color: ${theme.colors.white};
`;

export const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
`;

export const TestimonialsSubtitle = styled.p`
  color: ${theme.colors.primary};
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: ${theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  
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

export const TestimonialCarousel = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  
  @media (min-width: ${theme.breakpoints.xlDesktop}) {
    max-width: 1600px;
  }
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    max-width: 800px;
  }
`;

export const TestimonialCard = styled.div`
  background: linear-gradient(135deg, 
    ${theme.colors.gray.light}, 
    rgba(255, 255, 255, 0.9));
  padding: ${theme.spacing.xxl};
  border-radius: 20px;
  box-shadow: ${theme.shadows.medium};
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: ${theme.spacing.xl};
    font-size: 6rem;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.heading};
    opacity: 0.3;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl};
    
    &::before {
      font-size: 4rem;
      top: -15px;
      left: ${theme.spacing.lg};
    }
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
    
    &::before {
      font-size: 3rem;
      top: -10px;
      left: ${theme.spacing.md};
    }
  }
`;

export const TestimonialContent = styled.div`
  text-align: center;
`;

export const TestimonialText = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  font-style: italic;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.125rem;
  }
`;

export const TestimonialRating = styled.div`
  font-size: 1.5rem;
  margin-bottom: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

export const TestimonialAuthor = styled.div`
  text-align: center;
`;

export const TestimonialName = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xs};
`;

export const TestimonialRole = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 1rem;
`;

export const CarouselControls = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: -60px;
  right: -60px;
  transform: translateY(-50%);
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    left: -40px;
    right: -40px;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    position: static;
    transform: none;
    margin-top: ${theme.spacing.lg};
    justify-content: center;
    gap: ${theme.spacing.lg};
  }
`;

export const CarouselButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: ${theme.shadows.medium};
  
  &:hover {
    background-color: ${theme.colors.primaryDark};
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 45px;
    height: 45px;
    font-size: 1.25rem;
  }
`;

export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.xl};
`;

export const CarouselDot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ active }) => 
    active ? theme.colors.primary : theme.colors.gray.medium};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: ${theme.colors.primary};
    transform: scale(1.2);
  }
`;
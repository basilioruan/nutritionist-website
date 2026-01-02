import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const TestimonialsContainer = styled.section`
  padding: 100px 0;
  background: #fafafa;
  position: relative;
`;

export const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

export const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  color: ${theme.colors.text.primary};
  max-width: 600px;
  margin: 0 auto;
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

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 600px;
  }
`;

export const TestimonialItem = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 32px 28px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(to bottom, ${theme.colors.primary}, ${theme.colors.secondary});
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  &:hover {
    border-color: rgba(76, 175, 80, 0.2);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
    
    &::before {
      opacity: 1;
    }
  }
`;

export const TestimonialQuote = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333333;
  margin: 0 0 24px 0;
  font-weight: 400;
  
  .quote-mark {
    font-size: 1.8rem;
    color: ${theme.colors.primary};
    opacity: 0.6;
    font-family: Georgia, serif;
    font-weight: 600;
    vertical-align: top;
    line-height: 1;
    margin: 0 2px;
  }
`;

export const TestimonialAuthor = styled.div`
  
`;

export const TestimonialName = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px 0;
  letter-spacing: 0.3px;
`;

export const TestimonialRole = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.8rem;
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;


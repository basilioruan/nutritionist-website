import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ContactContainer = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background: linear-gradient(135deg, 
    ${theme.colors.gray.light} 0%, 
    rgba(255, 255, 255, 0.9) 100%);
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: ${theme.spacing.xxl};
  align-items: start;
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

export const ContactInfo = styled.div`
  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 2;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
  line-height: 1.3;
  
  span {
    color: ${theme.colors.primary};
    font-weight: 400;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2rem;
    text-align: center;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.75rem;
  }
`;

export const ContactDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    text-align: center;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const ContactIcon = styled.div`
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${theme.colors.white};
  
  svg {
    fill: ${theme.colors.white};
  }
`;

export const ContactText = styled.div`
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  
  strong {
    color: ${theme.colors.text.primary};
    display: block;
    margin-bottom: ${theme.spacing.xs};
  }
  
  a {
    color: ${theme.colors.text.secondary};
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
      background-color: ${theme.colors.primary};
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: ${theme.colors.primary};
      
      &::after {
        width: 100%;
      }
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-size: 1.25rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.medium};
  }
`;

export const ContactForm = styled.form`
  background: ${theme.colors.white};
  padding: ${theme.spacing.xl};
  border-radius: 16px;
  box-shadow: ${theme.shadows.medium};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 1;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
  }
`;

export const FormTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xl};
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

export const FormLabel = styled.label`
  display: block;
  color: ${theme.colors.text.primary};
  font-weight: 500;
  margin-bottom: ${theme.spacing.xs};
`;

export const FormInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 2px solid ${theme.colors.gray.medium};
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
  
  &::placeholder {
    color: ${theme.colors.gray.dark};
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 2px solid ${theme.colors.gray.medium};
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
  
  &::placeholder {
    color: ${theme.colors.gray.dark};
  }
`;

export const FormButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  color: ${theme.colors.white};
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: ${theme.spacing.xl};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.medium};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    width: auto;
    min-width: 200px;
    margin: ${theme.spacing.xl} auto 0;
    display: block;
  }
`;
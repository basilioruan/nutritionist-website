import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.primary};
    line-height: 1.6;
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.white};
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 600;
    line-height: 1.3;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
  }

  /* Utility classes */
  .container {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.xl};
    width: 100%;

    @media (max-width: 1600px) {
      max-width: 1500px;
      padding: 0 ${theme.spacing.lg};
    }

    @media (max-width: ${theme.breakpoints.desktop}) {
      max-width: 1200px;
      padding: 0 ${theme.spacing.md};
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      padding: 0 ${theme.spacing.sm};
    }
  }

  .section-padding {
    padding: ${theme.spacing.xxl} 0;

    @media (max-width: ${theme.breakpoints.tablet}) {
      padding: ${theme.spacing.xl} 0;
    }
  }
`;

export const Button = styled.button<{
  variant?: 'primary' | 'secondary' | 'outline' | 'light';
  size?: 'small' | 'medium' | 'large';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.xs};
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  
  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          
          &:hover {
            background-color: ${theme.colors.primaryDark};
            transform: translateY(-2px);
          }
        `;
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.white};
          
          &:hover {
            background-color: ${theme.colors.primary};
            transform: translateY(-2px);
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
          
          &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
            border: 2px solid ${theme.colors.primary};
            transform: translateY(-2px);
          }
        `;
      case 'light':
        return `
          background-color: ${theme.colors.cream};
          color: ${theme.colors.olive};
          
          &:hover {
            transform: translateY(-2px);
          }
        `;
      default:
        return '';
    }
  }}

  ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return `
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          font-size: 0.875rem;
        `;
      case 'medium':
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: 1rem;
        `;
      case 'large':
        return `
          padding: ${theme.spacing.md} ${theme.spacing.lg};
          font-size: 1.125rem;
        `;
      default:
        return '';
    }
  }}
`;
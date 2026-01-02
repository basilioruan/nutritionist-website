export const theme = {
  colors: {
    primary: '#8B9556', // Verde oliva da logo
    primaryDark: '#6B7442', // Tom mais escuro do verde oliva
    secondary: '#A4B067', // Tom mais claro do verde oliva
    accent: '#F5F1E8', // Bege/creme do texto da logo
    white: '#FFFFFF',
    black: '#000000',
    cream: '#E8E4D9', // Tom intermediário do bege
    olive: '#9BA05E', // Variação do verde oliva
    gray: {
      light: '#F5F5F5',
      medium: '#E0E0E0',
      dark: '#757575',
    },
    text: {
      primary: '#2C2C2C',
      secondary: '#666666',
      light: '#999999',
      accent: '#F5F1E8', // Texto em bege/creme
    },
  },
  fonts: {
    primary: "'Roboto', sans-serif",
    heading: "'Playfair Display', serif",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    largeDesktop: '1440px',
    xlDesktop: '1600px',
    xxlDesktop: '1920px',
  },
  shadows: {
    light: '0 2px 4px rgba(0,0,0,0.1)',
    medium: '0 4px 8px rgba(0,0,0,0.15)',
    heavy: '0 8px 16px rgba(0,0,0,0.2)',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
};

export type Theme = typeof theme;
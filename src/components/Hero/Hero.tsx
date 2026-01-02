import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroText,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroActions,
  HeroImage,
  HeroImageContainer,
} from './Hero.styles';
import { Button } from '../../styles/GlobalStyle';
import nataliaLogo from '../../assets/logo-natalia.jpeg';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const Hero: React.FC = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <HeroContainer id="inicio">
      <div className="container">
        <HeroContent>
          <HeroText>
            <HeroSubtitle>Nutricionista Especializada</HeroSubtitle>
            <HeroTitle>
              Transforme sua <span>saúde</span> e <span>bem-estar</span> com orientação profissional
            </HeroTitle>
            <HeroDescription>
              Ofereço consultoria nutricional personalizada para ajudar você a alcançar seus objetivos 
              de saúde através de uma alimentação equilibrada e sustentável. Com mais de 8 anos de 
              experiência, desenvolvo planos alimentares únicos para cada necessidade.
            </HeroDescription>
            <HeroActions>
              <Button 
                size="large" 
                onClick={() => scrollToSection('contato')}
              >
                Agendar Consulta
              </Button>
              <Button 
                variant="outline" 
                size="large"
                onClick={() => scrollToSection('sobre')}
              >
                Saiba Mais
              </Button>
            </HeroActions>
          </HeroText>
          
          <HeroImageContainer>
            <HeroImage>
              <img 
                src={nataliaLogo} 
                alt="Natália Cruz - Nutricionista"
              />
            </HeroImage>
          </HeroImageContainer>
        </HeroContent>
      </div>
    </HeroContainer>
  );
};

export default Hero;
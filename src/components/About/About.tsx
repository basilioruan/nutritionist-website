import React from 'react';
import {
  AboutContainer,
  AboutContent,
  AboutText,
  AboutTitle,
  AboutDescription,
  AboutStats,
  StatItem,
  StatNumber,
  StatLabel,
  AboutImage,
  AboutImageContainer,
  QualificationsList,
  QualificationItem,
} from './About.styles';

const About: React.FC = () => {
  return (
    <AboutContainer id="sobre">
      <div className="container">
        <AboutContent>
          <AboutImageContainer>
            <AboutImage>
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Consultório de nutrição"
              />
            </AboutImage>
          </AboutImageContainer>
          
          <AboutText>
            <AboutTitle>
              Sobre <span>Natália Cruz</span>
            </AboutTitle>
            <AboutDescription>
              Sou nutricionista formada pela Universidade Federal com especialização em Nutrição Clínica 
              e Esportiva. Durante meus 8 anos de carreira, ajudei mais de 500 pessoas a transformarem 
              seus hábitos alimentares e alcançarem uma vida mais saudável e equilibrada.
            </AboutDescription>
            <AboutDescription>
              Minha abordagem é personalizada e humanizada, considerando não apenas os aspectos nutricionais, 
              mas também o estilo de vida, preferências e objetivos únicos de cada paciente. Acredito que 
              uma alimentação saudável deve ser prazerosa e sustentável.
            </AboutDescription>
            
            <QualificationsList>
              <QualificationItem>
                ✓ Graduação em Nutrição - Universidade Federal
              </QualificationItem>
              <QualificationItem>
                ✓ Especialização em Nutrição Clínica
              </QualificationItem>
              <QualificationItem>
                ✓ Pós-graduação em Nutrição Esportiva
              </QualificationItem>
              <QualificationItem>
                ✓ Certificação em Comportamento Alimentar
              </QualificationItem>
              <QualificationItem>
                ✓ Membro do Conselho Regional de Nutricionistas
              </QualificationItem>
            </QualificationsList>
            
            <AboutStats>
              <StatItem>
                <StatNumber>8+</StatNumber>
                <StatLabel>Anos de Experiência</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>500+</StatNumber>
                <StatLabel>Pacientes Atendidos</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>95%</StatNumber>
                <StatLabel>Taxa de Sucesso</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>1000+</StatNumber>
                <StatLabel>Planos Personalizados</StatLabel>
              </StatItem>
            </AboutStats>
          </AboutText>
        </AboutContent>
      </div>
    </AboutContainer>
  );
};

export default About;
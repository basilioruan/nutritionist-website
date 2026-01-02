import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterText,
  FooterLink,
  FooterList,
  FooterItem,
  FooterBottom,
  FooterCopyright,
  FooterSocial,
  SocialLink,
} from './Footer.styles';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterSection>
            <FooterTitle>Natália Cruz - Nutricionista</FooterTitle>
            <FooterText>
              Transformando vidas através de uma alimentação saudável e equilibrada. 
              Mais de 8 anos de experiência em nutrição clínica e esportiva.
            </FooterText>
            <FooterText>
              <strong>CRN-3: 12345</strong>
            </FooterText>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Navegação</FooterTitle>
            <FooterList>
              <FooterItem>
                <FooterLink onClick={() => scrollToSection('inicio')}>
                  Início
                </FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink onClick={() => scrollToSection('sobre')}>
                  Sobre
                </FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink onClick={() => scrollToSection('servicos')}>
                  Serviços
                </FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink onClick={() => scrollToSection('depoimentos')}>
                  Depoimentos
                </FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink onClick={() => scrollToSection('contato')}>
                  Contato
                </FooterLink>
              </FooterItem>
            </FooterList>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Serviços</FooterTitle>
            <FooterList>
              <FooterItem>Consulta Nutricional</FooterItem>
              <FooterItem>Nutrição Esportiva</FooterItem>
              <FooterItem>Reeducação Alimentar</FooterItem>
              <FooterItem>Nutrição Clínica</FooterItem>
              <FooterItem>Consulta Online</FooterItem>
            </FooterList>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contato</FooterTitle>
            <FooterList>
              <FooterItem>
                📱 (11) 99999-9999
              </FooterItem>
              <FooterItem>
                📧 contato@nataliacruznutricionista.com.br
              </FooterItem>
              <FooterItem>
                📍 Rua das Flores, 123<br />
                Centro - São Paulo, SP
              </FooterItem>
              <FooterItem>
                🕒 Seg-Sex: 08h às 18h<br />
                Sáb: 08h às 12h
              </FooterItem>
            </FooterList>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <FooterCopyright>
            © {currentYear} Natália Cruz - Nutricionista. Todos os direitos reservados.
          </FooterCopyright>
          
          <FooterSocial>
            <SocialLink href="#" aria-label="Instagram">
              📷
            </SocialLink>
            <SocialLink href="#" aria-label="Facebook">
              📘
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              💼
            </SocialLink>
            <SocialLink href="#" aria-label="YouTube">
              📺
            </SocialLink>
            <SocialLink href="#" aria-label="WhatsApp">
              📱
            </SocialLink>
          </FooterSocial>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

export default Footer;
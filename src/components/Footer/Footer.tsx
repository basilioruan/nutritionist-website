import React from 'react';
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock 
} from 'react-icons/fa';
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
  FooterCopyright
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
            </FooterText>
            <FooterText>
              <strong>CRN-9: 34281</strong>
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
              <FooterItem>Consulta Presencial ou Online</FooterItem>
            </FooterList>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contato</FooterTitle>
            <FooterList>
              <FooterItem>
                <FaWhatsapp style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                (35) 99155-6025
              </FooterItem>
              <FooterItem>
                <FaInstagram style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                <a href="https://instagram.com/nataliacruz.nutri" target="_blank" rel="noopener noreferrer">
                  @nataliacruz.nutri
                </a>
              </FooterItem>
              <FooterItem>
                <FaEnvelope style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                contato@nataliacruznutricionista.com.br
              </FooterItem>
              <FooterItem>
                <FaMapMarkerAlt style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Rua Costa Pereira, 82<br />
                Vila Brasilia - Lavras, MG<br />
                <small>(Em frente ao hospital Vaz Monteiro)</small>
              </FooterItem>
              <FooterItem>
                <FaClock style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Seg-Sex: 08h às 18h<br />
                Sáb: 08h às 12h
              </FooterItem>
            </FooterList>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <FooterCopyright>
            © {currentYear} Natália Cruz - Nutricionista. Todos os direitos reservados.
          </FooterCopyright>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

export default Footer;
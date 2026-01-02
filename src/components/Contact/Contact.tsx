import React, { useState } from 'react';
import {
  ContactContainer,
  ContactContent,
  ContactInfo,
  ContactTitle,
  ContactDescription,
  ContactItem,
  ContactIcon,
  ContactText,
  ContactForm,
  FormTitle,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
  SocialLinks,
  SocialLink,
} from './Contact.styles';
import { Button } from '../../styles/GlobalStyle';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log('Form data:', formData);
    // Por enquanto, vamos simular o envio
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <ContactContainer id="contato">
      <div className="container">
        <ContactContent>
          <ContactInfo>
            <ContactTitle>
              Vamos conversar sobre seus <span>objetivos</span>?
            </ContactTitle>
            <ContactDescription>
              Estou aqui para ajudar você a transformar sua relação com a alimentação. 
              Entre em contato e vamos juntos construir um plano personalizado para suas necessidades.
            </ContactDescription>

            <ContactItem>
              <ContactIcon>📱</ContactIcon>
              <ContactText>
                <strong>WhatsApp</strong><br />
                (11) 99999-9999
              </ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon>📧</ContactIcon>
              <ContactText>
                <strong>E-mail</strong><br />
                contato@dramarianutrição.com.br
              </ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon>📍</ContactIcon>
              <ContactText>
                <strong>Endereço</strong><br />
                Rua das Flores, 123 - Centro<br />
                São Paulo, SP - CEP 01234-567
              </ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon>🕒</ContactIcon>
              <ContactText>
                <strong>Horário de Atendimento</strong><br />
                Segunda à Sexta: 08h às 18h<br />
                Sábado: 08h às 12h
              </ContactText>
            </ContactItem>

            <SocialLinks>
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
            </SocialLinks>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <FormTitle>Envie sua mensagem</FormTitle>
            
            <FormGroup>
              <FormLabel htmlFor="name">Nome completo *</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Seu nome completo"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">E-mail *</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="seu@email.com"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="phone">Telefone/WhatsApp *</FormLabel>
              <FormInput
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="(11) 99999-9999"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">Mensagem *</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Conte-me sobre seus objetivos e como posso te ajudar..."
                rows={5}
              />
            </FormGroup>

            <FormButton>
              <Button type="submit" size="large">
                Enviar Mensagem
              </Button>
            </FormButton>
          </ContactForm>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};

export default Contact;
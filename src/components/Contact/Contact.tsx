import React, { useState } from 'react';  
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock 
} from 'react-icons/fa';
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
} from './Contact.styles';

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
    
    // Usar mensagem padrão se estiver vazia
    const userMessage = formData.message.trim() || 'Gostaria de saber mais sobre a consulta nutricional.';
    
    // Formatar mensagem para WhatsApp
    const message = `Olá!.
    
    *Nome:* ${formData.name}
    *E-mail:* ${formData.email}
    *Telefone:* ${formData.phone}

    *Mensagem:*
    ${userMessage}`;

    // Codificar mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Abrir WhatsApp com mensagem pré-formatada
    const whatsappURL = `https://wa.me/5535991556025?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    
    // Limpar formulário após envio
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
        <ContactTitle>
          Entre em <span>contato</span>
        </ContactTitle>
        
        <ContactContent>
          <ContactInfo>
            <ContactDescription>
              Estou aqui para ajudar você a alcançar seus objetivos de saúde e bem-estar. 
              Entre em contato para agendar uma consulta ou tirar suas dúvidas.
            </ContactDescription>

            <ContactItem>
              <ContactIcon>
                <FaWhatsapp />
              </ContactIcon>
              <ContactText>
                <strong>WhatsApp</strong><br />
                (35) 99155-6025
              </ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <FaInstagram />
              </ContactIcon>
              <ContactText>
                <strong>Instagram</strong><br />
                <a href="https://instagram.com/nataliacruz.nutri" target="_blank" rel="noopener noreferrer">
                  @nataliacruz.nutri
                </a>
              </ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>
                <strong>E-mail</strong><br />
                contato@nataliacruznutricionista.com.br
              </ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactText>
                <strong>Endereço</strong><br />
                Rua Costa Pereira, 82<br />
                Vila Brasilia - Lavras, MG<br />
                CEP 37200-160<br />
                <small>(Em frente ao hospital Vaz Monteiro)</small>
              </ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <FaClock />
              </ContactIcon>
              <ContactText>
                <strong>Horário de Atendimento</strong><br />
                Segunda à Sexta: 08h às 18h<br />
                Sábado: 08h às 12h
              </ContactText>
            </ContactItem>
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
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="phone">Telefone *</FormLabel>
              <FormInput
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">Mensagem</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Gostaria de saber mais sobre a consulta nutricional."
              />
            </FormGroup>

            <FormButton type="submit">
              <FaWhatsapp style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Enviar Mensagem
            </FormButton>
          </ContactForm>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};

export default Contact;
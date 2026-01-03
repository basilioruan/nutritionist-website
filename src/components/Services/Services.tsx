import React from 'react';
import {
  ServicesContainer,
  ServicesHeader,
  ServicesTitle,
  ServicesSubtitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  ServiceFeatures,
  ServiceFeature,
} from './Services.styles';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🍎',
      title: 'Consulta Nutricional',
      description: 'Avaliação completa do seu estado nutricional com plano alimentar personalizado.',
      features: [
        'Anamnese detalhada',
        'Avaliação antropométrica',
        'Plano alimentar personalizado'
      ]
    },
    {
      icon: '🏃‍♀️',
      title: 'Nutrição Esportiva',
      description: 'Planos nutricionais específicos para atletas e praticantes de atividade física.',
      features: [
        'Periodização nutricional',
        'Suplementação específica',
        'Estratégias de hidratação'
      ]
    },
    {
      icon: '⚖️',
      title: 'Reeducação Alimentar',
      description: 'Transforme seus hábitos alimentares de forma gradual e sustentável.',
      features: [
        'Mudança de hábitos',
        'Educação nutricional',
        'Receitas saudáveis'
      ]
    },
    {
      icon: '💻',
      title: 'Consulta Presencial ou Online',
      description: 'Atendimento nutricional presencial ou à distância com toda comodidade e segurança.',
      features: [
        'Flexibilidade de horários',
        'Material digital',
        'Acompanhamento via WhatsApp'
      ]
    }
  ];

  return (
    <ServicesContainer id="servicos">
      <div className="container">
        <ServicesHeader>
          <ServicesSubtitle>Meus Serviços</ServicesSubtitle>
          <ServicesTitle>
            Como posso <span>ajudar você</span> a alcançar seus objetivos
          </ServicesTitle>
        </ServicesHeader>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, featureIndex) => (
                  <ServiceFeature key={featureIndex}>
                    {feature}
                  </ServiceFeature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </div>
    </ServicesContainer>
  );
};

export default Services;
import React, { useState, useEffect } from 'react';
import {
  TestimonialsContainer,
  TestimonialsHeader,
  TestimonialsTitle,
  TestimonialsSubtitle,
  TestimonialCarousel,
  TestimonialCard,
  TestimonialContent,
  TestimonialText,
  TestimonialAuthor,
  TestimonialName,
  TestimonialRole,
  TestimonialRating,
  CarouselControls,
  CarouselButton,
  CarouselDots,
  CarouselDot,
} from './Testimonials.styles';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "A Dra. Maria transformou completamente minha relação com a comida. Perdi 15kg de forma saudável e aprendi a comer com prazer e consciência. Seu acompanhamento é excepcional!",
      author: "Ana Silva",
      role: "Executiva",
      rating: 5
    },
    {
      text: "Procurei a Dra. Maria para melhorar minha performance nos treinos. O plano nutricional foi perfeito, consegui ganhar massa muscular e melhorar meu rendimento significativamente.",
      author: "Carlos Santos",
      role: "Personal Trainer",
      rating: 5
    },
    {
      text: "Estava com diabetes tipo 2 e não sabia como controlar através da alimentação. Com a orientação da Dra. Maria, consegui estabilizar minha glicemia e melhorar muito minha qualidade de vida.",
      author: "Maria Oliveira",
      role: "Aposentada",
      rating: 5
    },
    {
      text: "O atendimento online da Dra. Maria é incrível! Mesmo à distância, senti todo o cuidado e atenção. Consegui reeducar minha alimentação e criar hábitos saudáveis para toda família.",
      author: "João Pereira",
      role: "Empresário",
      rating: 5
    },
    {
      text: "Após anos tentando emagrecer sem sucesso, a Dra. Maria me ajudou a entender que não se tratava apenas de uma dieta, mas de uma mudança de estilo de vida. Resultado: -20kg e muito mais disposição!",
      author: "Fernanda Costa",
      role: "Professora",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} style={{ color: index < rating ? '#FFD700' : '#E0E0E0' }}>
        ★
      </span>
    ));
  };

  return (
    <TestimonialsContainer id="depoimentos">
      <div className="container">
        <TestimonialsHeader>
          <TestimonialsSubtitle>Depoimentos</TestimonialsSubtitle>
          <TestimonialsTitle>
            O que meus <span>pacientes</span> dizem
          </TestimonialsTitle>
        </TestimonialsHeader>

        <TestimonialCarousel>
          <TestimonialCard>
            <TestimonialContent>
              <TestimonialText>
                "{testimonials[currentIndex].text}"
              </TestimonialText>
              <TestimonialRating>
                {renderStars(testimonials[currentIndex].rating)}
              </TestimonialRating>
              <TestimonialAuthor>
                <TestimonialName>{testimonials[currentIndex].author}</TestimonialName>
                <TestimonialRole>{testimonials[currentIndex].role}</TestimonialRole>
              </TestimonialAuthor>
            </TestimonialContent>
          </TestimonialCard>

          <CarouselControls>
            <CarouselButton onClick={prevTestimonial}>
              ←
            </CarouselButton>
            <CarouselButton onClick={nextTestimonial}>
              →
            </CarouselButton>
          </CarouselControls>

          <CarouselDots>
            {testimonials.map((_, index) => (
              <CarouselDot
                key={index}
                active={index === currentIndex}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </CarouselDots>
        </TestimonialCarousel>
      </div>
    </TestimonialsContainer>
  );
};

export default Testimonials;
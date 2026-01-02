import React from 'react';
import {
  TestimonialsContainer,
  TestimonialsHeader,
  TestimonialsTitle,
  TestimonialsGrid,
  TestimonialItem,
  TestimonialQuote,
  TestimonialAuthor,
  TestimonialName,
  TestimonialRole,
} from './Testimonials.styles';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Profissionalismo excepcional. Resultados visíveis em poucas semanas.",
      author: "Ana Silva",
      role: "Executiva"
    },
    {
      text: "Transformou minha performance nos treinos de forma surpreendente.",
      author: "Carlos Santos", 
      role: "Atleta"
    },
    {
      text: "Abordagem única e personalizada. Mudou minha relação com a comida.",
      author: "Maria Oliveira",
      role: "Empresária"
    },
    {
      text: "Método inovador. Consegui meus objetivos sem sacrifícios extremos.",
      author: "João Pereira",
      role: "Designer"
    }
  ];

  return (
    <TestimonialsContainer id="depoimentos">
      <div className="container">
        <TestimonialsHeader>
          <TestimonialsTitle>
            Experiências que <span>transformam</span>
          </TestimonialsTitle>
        </TestimonialsHeader>

        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialItem key={index}>
              <TestimonialQuote>
                <span className="quote-mark">"</span>{testimonial.text}<span className="quote-mark">"</span>
              </TestimonialQuote>
              <TestimonialAuthor>
                <TestimonialName>{testimonial.author}</TestimonialName>
                <TestimonialRole>{testimonial.role}</TestimonialRole>
              </TestimonialAuthor>
            </TestimonialItem>
          ))}
        </TestimonialsGrid>
      </div>
    </TestimonialsContainer>
  );
};

export default Testimonials;
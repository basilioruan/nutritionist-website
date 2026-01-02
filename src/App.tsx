import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import About from './components/About';
import Experience from './components/Experience';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';


function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingSection />
        <About />
        <Experience />
        <ProjectsSection />
        <ContactMeSection />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;

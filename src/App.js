import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Gallery from './components/Gallery';
import PopularEventSection from './components/PopularEventSection';
import HomePage from './pages/HomePage';
import Faqs from './components/Faqs';
import BookEvent from './pages/BookEvent';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUSe from './pages/TermsOfUse';
import ContactUsSection from './pages/ContactUsSection';
import ScrollToTop from "./components/ScrollToTop"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <main>
      <ChakraProvider>
        <Router> 
          <ScrollToTop /> 
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book-event" element={<BookEvent />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUSe />} />
            <Route path="/about" element={<About />} />
            <Route path="/popular-event" element={<PopularEventSection />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<ContactUsSection />} />
            <Route path="/faqs" element={<Faqs />} />
          </Routes>
          <Footer />
        </Router>
      </ChakraProvider>
    </main>
  );
}

export default App;

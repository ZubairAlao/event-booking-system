import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Pages from './pages/Pages';
import ScrollToTop from "./components/ScrollToTop";
import { EventProvider } from './components/context/EventContext';
import { BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
    <main>
      <ChakraProvider>
        <EventProvider>
        <Router> 
          <ScrollToTop /> 
          <Header />
          <Pages />
          <Footer />
        </Router>
        </EventProvider>
      </ChakraProvider>
    </main>
  );
}

export default App;

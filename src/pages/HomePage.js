import '../App.css';
import LandingSection from '../components/LandingSection';
import About from '../components/About';
import Gallery from '../components/Gallery';
import PopularEventSection from '../components/PopularEventSection';
import Faqs from '../components/Faqs';


function HomePage() {
  return (
    <div>
        <LandingSection />
        <About />
        <Gallery />
        <PopularEventSection />
        <Faqs />
    </div>
  );
}

export default HomePage;

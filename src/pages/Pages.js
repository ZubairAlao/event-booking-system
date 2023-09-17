import '../App.css';
import About from '../components/About'
import Gallery from '../components/Gallery';
import PopularEventSection from '../components/PopularEventSection';
import HomePage from '../pages/HomePage';
import Faqs from '../components/Faqs';
import BookEvent from '../pages/BookEvent';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfUSe from '../pages/TermsOfUse';
import ContactUsSection from '../pages/ContactUsSection';
import EventList from '../pages/EventList';
import BookInfo from '../pages/BookInfo';
import Login from '../pages/Login';
import SignUp from '../pages/signUp';
import { Route, Routes } from 'react-router-dom';



function Pages() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/book-event" element={<BookEvent />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUSe />} />
      <Route path="/about" element={<About />} />
      <Route path="/popular-event" element={<PopularEventSection />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/eventlist/:guestCount" element={<EventList />} />
      <Route path="/book-info/:info" element={<BookInfo />} />
      <Route path="/contact-us" element={<ContactUsSection />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default Pages;

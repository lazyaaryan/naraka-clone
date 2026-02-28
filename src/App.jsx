import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MediaSection from './components/MediaSection';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MediaSection />
      <Footer />
    </>
  );
}

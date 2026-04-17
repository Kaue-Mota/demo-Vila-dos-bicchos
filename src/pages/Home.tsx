import ContactSection from '../components/ContactSection';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import Team from '../components/Team';

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Services />
      <Team />
      <Gallery />
      <Reviews />
      <ContactSection />
    </>
  );
}

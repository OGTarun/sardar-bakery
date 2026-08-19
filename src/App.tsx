import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import Menu from './components/Menu';
import Cakes from './components/Cakes';
import CustomCakes from './components/CustomCakes';
import Pastries from './components/Pastries';
import Specials from './components/Specials';
import Services from './components/Services';
import Trust from './components/Trust';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Heritage />
        <Menu />
        <Cakes />
        <CustomCakes />
        <Pastries />
        <Specials />
        <Services />
        <Trust />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
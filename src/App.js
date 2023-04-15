import './App.css';
import Choose from './components/Chooseme/chooseme';
import About from './components/aboutme/aboutMe';
import Contact from './components/contact/contact';
import Testimonial from './components/feedback/feedback';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';
import Portfolio from './components/portfolio/myportfolio';
import Services from './components/servicios/service';

function App() {

  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Portfolio/>
    <Choose/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;

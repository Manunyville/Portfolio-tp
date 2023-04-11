import './App.css';
import About from './components/aboutme/aboutMe';
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
    </div>
  );
}

export default App;

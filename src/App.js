import './App.css';
import About from './components/aboutme/aboutMe';
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';
import Services from './components/servicios/service';

function App() {

  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    </div>
  );
}

export default App;

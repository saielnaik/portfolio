import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-[#202020] font-mono ">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;

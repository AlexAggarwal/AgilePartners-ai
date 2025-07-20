import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Team from './components/Team';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Solutions />
      <Projects />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
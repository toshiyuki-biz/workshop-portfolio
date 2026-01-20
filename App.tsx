import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Career from './components/Career';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Hobby from './components/Hobby';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Career />
        <Services />
        <Philosophy />
        <Hobby />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Toshiyuki Konno. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
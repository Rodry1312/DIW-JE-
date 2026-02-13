import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/layout/Hero';
import { Services } from './components/layout/Services';
import { Footer } from './components/layout/Footer'; // Importamos el nuevo Footer
import './index.css';

function App() {
  // Iniciamos en true para mantener la estética Cyberpunk de "The Data Rebels"
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* El contenedor principal gestiona el fondo para toda la página.
        La transición (transition-colors) hace que el cambio a modo luz sea suave.
      */}
      <div className="min-h-screen bg-slate-50 dark:bg-black transition-colors duration-500">
        
        {/* Pasamos las funciones y el estado a la Navbar */}
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        
        <main>
          {/* Sección de impacto inicial */}
          <Hero />
          
          {/* Sección de servicios con las 4 tarjetas (incluyendo la de los planes) */}
          <Services />
        </main>

        {/* El cierre con estilo terminal/consola */}
        <Footer />
        
      </div>
    </div>
  );
}

export default App;
export const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center bg-black/50">
      
      {/* LOGO EN VERDE NEÓN */}
      <div className="flex items-center gap-2">
        <span className="text-neonGreen font-black text-2xl tracking-tighter drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">
          DATA_REBELS
        </span>
        <span className="text-white font-thin text-2xl">/</span>
      </div>
      
      <div className="flex items-center gap-8">
        {/* Enlaces del menú con hover en neón */}
        <ul className="hidden md:flex gap-6 font-mono text-xs text-gray-400">
          <li className="hover:text-neonGreen cursor-pointer transition-colors">/SERVICIOS</li>
          <li className="hover:text-neonGreen cursor-pointer transition-colors">/SISTEMA</li>
          <li className="hover:text-neonGreen cursor-pointer transition-colors">/CONTACTO</li>
        </ul>

        {/* Botón de cambio de modo */}
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-neonGreen hover:text-black transition-all"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};
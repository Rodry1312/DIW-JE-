import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-slate-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Nombre de la App */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-indigo-600 tracking-tight">
              Freelance<span className="text-slate-800">Hub</span>
            </span>
          </div>

          {/* Enlaces de navegación - Flexbox y Hover */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Inicio</a>
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Talento</a>
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Proyectos</a>
          </div>

          {/* Botón de ejemplo (usando clases de Tailwind directamente) */}
          <div className="flex items-center">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-all">
              Acceso Clientes
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
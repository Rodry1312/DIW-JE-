export const Footer = () => {
  return (
    /* Forzamos bg-slate-950 para que siempre sea oscuro, o usa dark:bg-slate-950 si prefieres que cambie */
    <footer className="w-full bg-slate-950 text-white border-t border-neonGreen/20 pt-16 pb-8 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Columna 1: Branding */}
        <div className="col-span-1">
          <div className="text-neonGreen font-black text-2xl tracking-tighter mb-4">
            DR <span className="text-white">/</span>
          </div>
          <p className="text-slate-400 font-mono text-[11px] leading-relaxed">
            [SISTEMA_AGENCIA_MARKETING]<br />
            Análisis masivo de datos para<br />
            crecimiento exponencial.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div>
          <h4 className="text-neonGreen font-bold mb-4 uppercase text-xs tracking-widest font-mono">// NAVEGACIÓN</h4>
          <ul className="text-slate-400 font-mono text-[10px] space-y-3">
            <li className="hover:text-neonGreen cursor-pointer flex items-center gap-2 transition-colors">
              <span className="text-neonGreen/50 text-[8px]">▶</span> SERVICIOS
            </li>
            <li className="hover:text-neonGreen cursor-pointer flex items-center gap-2 transition-colors">
              <span className="text-neonGreen/50 text-[8px]">▶</span> PLANES_ROI
            </li>
            <li className="hover:text-neonGreen cursor-pointer flex items-center gap-2 transition-colors">
              <span className="text-neonGreen/50 text-[8px]">▶</span> MANIFIESTO
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h4 className="text-neonGreen font-bold mb-4 uppercase text-xs tracking-widest font-mono">// CONTACTO</h4>
          <div className="bg-white/5 p-4 border border-white/10 rounded-lg font-mono text-[10px] text-slate-400">
            <p className="mb-1 text-white">MAIL: rebels@marketing.io</p>
            <p className="text-neonGreen animate-pulse uppercase">STATUS: CONECTADO</p>
          </div>
        </div>

        {/* Columna 4: Newsletter */}
        <div>
          <h4 className="text-neonGreen font-bold mb-4 uppercase text-xs tracking-widest font-mono">// SUSCRIPCIÓN</h4>
          <div className="flex flex-col gap-2">
            <input 
              type="text" 
              placeholder="user@rebels.com" 
              className="bg-black/40 border border-white/20 px-3 py-2 text-[10px] font-mono text-white focus:outline-none focus:border-neonGreen rounded"
            />
            <button className="bg-neonGreen hover:bg-white text-black font-black py-2 text-[10px] uppercase transition-all rounded">
              SUSCRIBIRSE
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/5 pt-8 flex justify-between items-center opacity-60">
        <p className="text-[9px] font-mono text-slate-500">© 2026 THE_DATA_REBELS_MARKETING</p>
        <p className="text-[9px] font-mono text-neonGreen tracking-widest">PROTOCOL_V.4.0</p>
      </div>
    </footer>
  );
};
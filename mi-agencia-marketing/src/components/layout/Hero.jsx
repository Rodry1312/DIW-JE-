import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-slate-900">
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter">
          Caos <span className="text-neonGreen">→</span> ROI
        </h1>
        <p className="text-gray-400 font-mono text-lg">/ SISTEMA_ESTRATÉGICO_ACTIVADO /</p>
        <Button>INICIAR_CONEXIÓN</Button>
      </div>
    </section>
  );
};
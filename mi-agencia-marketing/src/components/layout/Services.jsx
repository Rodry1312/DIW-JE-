import { Card } from '../ui/Card';

export const Services = () => {
  const servicesData = [
    { id: 1, title: "Análisis de Datos", description: "Interpretamos el ruido del mercado.", icon: "📊" },
    { id: 2, title: "Estrategia Guerrilla", description: "Marketing disruptivo para empresas.", icon: "⚡" },
    { id: 3, title: "Automatización IA", description: "Sistemas autónomos inteligentes.", icon: "🤖" },
    { id: 4, title: "Descubre nuestros planes", description: "Desde el plan más económico al más profesional.", icon: "💎" }
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-l-4 border-neonGreen pl-4">
          <span className="text-neonGreen font-mono text-xs uppercase">/ MÓDULOS</span>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white uppercase mt-2">Servicios</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((s) => (
            <Card key={s.id} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};
import { Card } from '../ui/Card';
import { servicesData } from '../../data/services';

export const Services = () => {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-neonGreen font-mono text-sm tracking-widest uppercase">/ NUESTROS_MÓDULOS</span>
          <h2 className="text-4xl font-black text-white uppercase mt-2">Soluciones de Guerrilla</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <Card 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
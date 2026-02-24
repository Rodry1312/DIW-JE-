import Navbar from './components/NavBar';
import UserCard from './components/UserCard';
import LoginForm from './components/LoginForm';
import Button from './components/Button'; // Asegúrate de tener este import

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="max-w-6xl mx-auto p-8 pt-24">
        {/* Título y Variantes de Botones (Requisito 1) */}
        <section className="mb-12">
          <h1 className="text-3xl font-black text-slate-800 mb-4">Panel de Control</h1>
          <div className="flex gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 w-fit">
            <Button variant="primary">Guardar</Button>
            <Button variant="secondary">Ajustes</Button>
            <Button variant="danger">Eliminar</Button>
            <Button variant="primary" disabled>Desactivado</Button>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Listado de Usuarios (Requisito 2) */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-700 mb-4">Usuarios Activos</h2>
            <UserCard 
              name="Alex Freelance" 
              email="alex@hub.com" 
              avatar="https://i.pravatar.cc/150?u=alex"
            />
            <UserCard 
              name="Sara García" 
              email="sara.dev@hub.com" 
              avatar="https://i.pravatar.cc/150?u=sara"
            />
          </div>

          {/* Formulario (Requisito 3) */}
          <div className="flex justify-center lg:justify-end">
            <LoginForm />
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
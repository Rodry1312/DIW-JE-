const LoginForm = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 w-full max-w-md">
      <h2 className="text-2xl font-black text-slate-800 mb-6">Acceso Clientes</h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">Email</label>
          <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="tu@email.com" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">Contraseña</label>
          <input type="password" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="••••••••" />
        </div>
        <p className="text-red-500 text-sm font-medium">⚠️ Credenciales incorrectas</p>
        <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-transform active:scale-95 mt-4">
          Entrar al Panel
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
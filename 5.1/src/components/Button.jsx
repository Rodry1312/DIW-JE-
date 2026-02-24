const Button = ({ variant = "primary", children, disabled, ...props }) => {
  // Definimos los estilos base que tendrán TODOS los botones
  const baseStyles = "px-5 py-2.5 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed";

  // Definimos los colores específicos para cada variante
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-300",
    secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300 focus:ring-slate-100",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-200",
  };

  return (
    <button 
      disabled={disabled} 
      className={`${baseStyles} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
// src/components/ui/Button.jsx
export const Button = ({ children, variant = 'primary', onClick }) => {
  const baseStyles = "px-8 py-3 font-mono font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 active:scale-95";
  
  const variants = {
    primary: "bg-neonGreen text-black shadow-[0_0_15px_rgba(57,255,20,0.5)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)]",
    secondary: "border-2 border-neonGreen text-neonGreen hover:bg-neonGreen hover:text-black"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
};
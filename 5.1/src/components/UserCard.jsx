const UserCard = ({ name, email, avatar }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center gap-6 border border-slate-100 transition-all hover:shadow-xl">
      <img 
        src={avatar || "https://i.pravatar.cc/150"} 
        alt={name} 
        className="w-24 h-24 rounded-full object-cover ring-4 ring-indigo-50"
      />
      <div className="text-center sm:text-left flex-grow">
        <h3 className="text-xl font-bold text-slate-800">{name}</h3>
        <p className="text-indigo-600 font-medium mb-4">{email}</p>
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Gestionar Perfil
        </button>
      </div>
    </div>
  );
};

export default UserCard;
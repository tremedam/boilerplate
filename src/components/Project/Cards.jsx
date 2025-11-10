export default function Cards({ title, icon, content, theme }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      <div className="md:flex">
        {/* Ícone lateral */}
        <div
          className="md:w-32 flex items-center justify-center p-8 text-6xl"
          style={{ background: `linear-gradient(135deg, ${theme.primary}15, ${theme.secondary}15)` }}
        >
          {icon}
        </div>

        {/* Conteúdo */}
        <div className="flex-1 p-6 md:p-8">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: theme.primary }}
          >
            {title}
          </h3>
          <div className="text-gray-700 leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

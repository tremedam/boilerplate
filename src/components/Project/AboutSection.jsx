export default function AboutSection({ data, theme }) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: theme.primary }}
        >
          {data.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {data.content}
            </p>
          </div>

          {/* Estatísticas */}
          {data.stats && (
            <div className="grid grid-cols-3 gap-6">
              {data.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg shadow-lg bg-gradient-to-br from-blue-50 to-purple-50"
                >
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: theme.primary }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

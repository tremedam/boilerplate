import Cards from "./Cards";

export default function AboutSection({ data, theme }) {
  // Ícones/emojis para cada seção
  const sectionIcons = {
    'Visão Geral': '🎯',
    'Contexto e Motivação': '💡',
    'Objetivo Principal': '🚀',
    'Metodologia de Desenvolvimento': '⚙️',
    'Diferenciais Técnicos': '⭐',
    'Aplicabilidade': '📚',
  };

  // Função para processar o conteúdo em seções
  const processSections = (text) => {
    const sections = [];
    const paragraphs = text.split('\n\n').filter(p => p.trim());

    paragraphs.forEach((paragraph, idx) => {
      // Detecta títulos em negrito
      if (paragraph.trim().startsWith('**') && paragraph.includes(':**')) {
        const titleMatch = paragraph.match(/\*\*(.*?):\*\*/);
        const title = titleMatch ? titleMatch[1] : '';
        const content = paragraph.replace(/\*\*(.*?):\*\*/, '').trim();

        // Detecta listas com bullet points
        let processedContent;
        if (content.includes('•')) {
          const items = content.split('•').filter(item => item.trim());
          processedContent = (
            <ul className="space-y-3 mt-4">
              {items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 text-lg">▸</span>
                  <span>{item.trim()}</span>
                </li>
              ))}
            </ul>
          );
        } else {
          processedContent = (
            <p className="mt-4">{content}</p>
          );
        }

        sections.push({
          title,
          icon: sectionIcons[title] || '📌',
          content: processedContent
        });
      }
    });

    return sections;
  };

  const sections = processSections(data.content);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: theme.primary }}
          >
            {data.title}
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: theme.accent }}></div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Cards de conteúdo - 3 colunas */}
          <div className="lg:col-span-3 space-y-6">
            {sections.map((section, idx) => (
              <Cards
                key={idx}
                title={section.title}
                icon={section.icon}
                content={section.content}
                theme={theme}
              />
            ))}
          </div>

          {/* Estatísticas - 1 coluna lateral */}
          {data.stats && (
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: theme.primary }}>
                  📊 Números
                </h3>
                {data.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-xl shadow-lg border-l-4 transform hover:scale-105 transition-transform duration-200 mb-4"
                    style={{ backgroundColor: theme.secondary, borderColor: theme.accent }}
                  >
                    <div
                      className="text-4xl font-bold mb-2 text-white"
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-200 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
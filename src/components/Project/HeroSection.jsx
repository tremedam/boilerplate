import Image from "next/image";

export default function HeroSection({ data, theme }) {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-6">
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: theme.primary }}
            >
              {data.title}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.description}
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-wrap gap-4">
              {data.buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={`px-6 py-3 rounded-lg font-semibold transition shadow-lg ${button.primary
                    ? "text-white hover:opacity-90"
                    : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600"
                    }`}
                  style={
                    button.primary
                      ? { backgroundColor: theme.primary }
                      : undefined
                  }
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>

          {/* Imagem */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl bg-white dark:bg-gray-700 flex items-center justify-center p-8 transition-colors duration-300">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

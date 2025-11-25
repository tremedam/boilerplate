import Image from "next/image";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function HeroSection({ data, theme }) {
  const { colors } = useThemeColors();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-6">
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight transition-colors duration-300"
              style={{ color: colors.title }}
            >
              {data.title}
            </h2>
            <p className="text-lg leading-relaxed transition-colors duration-300" style={{ color: colors.text }}>
              {data.description}
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-wrap gap-4">
              {data.buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  target={button.href.startsWith('http') ? '_blank' : undefined}
                  rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  style={
                    button.primary
                      ? {
                        backgroundColor: colors.primary,
                        color: '#ffffff',
                      }
                      : {
                        backgroundColor: colors.background,
                        color: colors.text,
                        border: `2px solid ${colors.primary}`
                      }
                  }
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>

          {/* Imagem */}
          <div className="relative w-full">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

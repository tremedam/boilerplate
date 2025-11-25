import { useState } from "react";
import Image from "next/image";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function Cards({ title, icon, content, theme, image, bgColor, isExpanded, onToggle }) {
  // Estado interno como fallback se não for controlado externamente
  const [internalExpanded, setInternalExpanded] = useState(false);
  const { colors } = useThemeColors();

  const controlled = isExpanded !== undefined && onToggle !== undefined;
  const expanded = controlled ? isExpanded : internalExpanded;

  const isWhiteBg = bgColor === "#ffffff" || bgColor === "white";

  const handleClick = () => {
    if (controlled) {
      onToggle();
    } else {
      setInternalExpanded(!internalExpanded);
    }
  };

  // Define as cores do card baseado no tema atual
  const cardBg = isWhiteBg ? colors.background : colors.cards.bg;
  const cardText = isWhiteBg ? colors.text : colors.cards.text;
  const cardBorder = isWhiteBg ? colors.primary : colors.cards.border;

  return (
    <div
      className="rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 cursor-pointer hover:scale-[1.02]"
      style={{
        backgroundColor: cardBg,
        borderColor: cardBorder,
        borderWidth: '1px',
        borderStyle: 'solid',
        transform: expanded ? 'scale(1.05)' : 'scale(1)'
      }}
      onClick={handleClick}
    >
      {icon && typeof icon === "string" && icon !== "" ? (
        // Layout com ícone lateral
        <div className="md:flex">
          {/* Ícone lateral */}
          <div className="md:w-32 flex items-center justify-center p-8" style={{ color: cardText }}>
            {icon.endsWith(".svg") || icon.startsWith("/images") ? (
              <Image src={icon} alt={title} width={64} height={64} className="object-contain" />
            ) : (
              <span className="text-6xl">{icon}</span>
            )}
          </div>

          {/* Conteúdo */}
          <div className="flex-1 p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-between" style={{ color: cardText }}>
              {title}
              <span className="text-sm ml-2" style={{ color: cardText, opacity: 0.7 }}>
                {expanded ? "▲" : "▼"}
              </span>
            </h3>

            {/* Conteúdo com animação - só aparece quando expandido */}
            {expanded && (
              <div className="leading-relaxed transition-all duration-500 animate-fadeIn" style={{ color: cardText, opacity: 0.9 }}>
                {content}

                {/* Imagem (aparece apenas quando expandido) */}
                {image && (
                  <div className="mt-6 relative w-full h-64 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        // Layout sem ícone (centralizado)
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: cardText }}>
            {title}
            <span className="text-sm ml-2" style={{ color: cardText, opacity: 0.7 }}>
              {expanded ? "▲" : "▼"}
            </span>
          </h3>

          {/* Conteúdo com animação - só aparece quando expandido */}
          {expanded && (
            <div className="leading-relaxed transition-all duration-500 animate-fadeIn" style={{ color: cardText, opacity: 0.9 }}>
              {content}

              {/* Imagem (aparece apenas quando expandido) */}
              {image && (
                <div className="mt-6 relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

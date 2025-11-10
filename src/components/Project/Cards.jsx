import { useState } from "react";
import Image from "next/image";

export default function Cards({ title, icon, content, theme, image, bgColor, isExpanded, onToggle }) {
  // Estado interno como fallback se não for controlado externamente
  const [internalExpanded, setInternalExpanded] = useState(false);

  const controlled = isExpanded !== undefined && onToggle !== undefined;
  const expanded = controlled ? isExpanded : internalExpanded;

  const backgroundColor = bgColor || theme.secondary;
  const isWhiteBg = bgColor === "#ffffff" || bgColor === "white";
  const textColor = isWhiteBg ? "text-gray-800" : "text-white";
  const subtitleColor = isWhiteBg ? "text-gray-500" : "text-gray-200";
  const contentColor = isWhiteBg ? "text-gray-700" : "text-white";

  const handleClick = () => {
    if (controlled) {
      onToggle();
    } else {
      setInternalExpanded(!internalExpanded);
    }
  };

  return (
    <div
      className={`rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 cursor-pointer ${expanded ? "scale-105" : "hover:scale-[1.02]"
        }`}
      style={{ backgroundColor }}
      onClick={handleClick}
    >
      {icon && typeof icon === "string" && icon !== "" ? (
        // Layout com ícone lateral
        <div className="md:flex">
          {/* Ícone lateral */}
          <div className={`md:w-32 flex items-center justify-center p-8 ${isWhiteBg ? 'text-gray-800' : 'text-white'}`}>
            {icon.endsWith(".svg") || icon.startsWith("/images") ? (
              <Image src={icon} alt={title} width={64} height={64} className="object-contain" />
            ) : (
              <span className="text-6xl">{icon}</span>
            )}
          </div>

          {/* Conteúdo */}
          <div className="flex-1 p-6 md:p-8">
            <h3 className={`text-2xl font-bold mb-4 flex items-center justify-between ${textColor}`}>
              {title}
              <span className={`text-sm ml-2 ${subtitleColor}`}>
                {expanded ? "▲" : "▼"}
              </span>
            </h3>

            {/* Conteúdo com animação - só aparece quando expandido */}
            {expanded && (
              <div className={`${contentColor} leading-relaxed transition-all duration-500 animate-fadeIn`}>
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
          <h3 className={`text-2xl font-bold mb-4 text-center ${textColor}`}>
            {title}
            <span className={`text-sm ml-2 ${subtitleColor}`}>
              {expanded ? "▲" : "▼"}
            </span>
          </h3>

          {/* Conteúdo com animação - só aparece quando expandido */}
          {expanded && (
            <div className={`${contentColor} leading-relaxed transition-all duration-500 animate-fadeIn`}>
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

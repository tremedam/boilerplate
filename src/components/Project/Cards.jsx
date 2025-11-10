import { useState } from "react";
import Image from "next/image";

export default function Cards({ title, icon, content, theme, image }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 cursor-pointer ${isExpanded ? "scale-105" : "hover:scale-[1.02]"
        }`}
      style={{ backgroundColor: theme.secondary }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="md:flex">
        {/* Ícone lateral */}
        <div
          className="md:w-32 flex items-center justify-center p-8 text-6xl text-white"
        >
          {icon}
        </div>

        {/* Conteúdo */}
        <div className="flex-1 p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-between text-white">
            {title}
            <span className="text-sm text-gray-200 ml-2">
              {isExpanded ? "▲" : "▼"}
            </span>
          </h3>

          {/* Conteúdo com animação - só aparece quando expandido */}
          {isExpanded && (
            <div className="text-white leading-relaxed transition-all duration-500 animate-fadeIn">
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
    </div>
  );
}

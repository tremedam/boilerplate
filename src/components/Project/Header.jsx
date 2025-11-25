import Image from "next/image";
import Link from "next/link";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function Header({ data, theme }) {
  const { colors } = useThemeColors();

  return (
    <header
      className="sticky top-0 z-50 shadow-md transition-colors duration-300"
      style={{
        backgroundColor: colors.header.bg,
        borderBottom: `3px solid ${colors.primary}`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo e Título */}
        <div className="flex items-center gap-4">
          {data.logo && (
            <div className="relative w-12 h-12">
              <Image
                src={data.logo}
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          )}
          <div>
            <h1
              className="text-xl md:text-2xl font-bold transition-colors duration-300"
              style={{ color: colors.header.text }}
            >
              {data.title}
            </h1>
            <p className="text-sm hidden md:block transition-colors duration-300" style={{ color: colors.header.text, opacity: 0.8 }}>
              {data.subtitle}
            </p>
          </div>
        </div>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="/project#about"
            className="transition hover:opacity-80"
            style={{ color: colors.header.text, opacity: 0.9 }}
          >
            Sobre
          </Link>
          <Link
            href="/features"
            className="transition hover:opacity-80"
            style={{ color: colors.header.text, opacity: 0.9 }}
          >
            Funcionalidades
          </Link>
          <Link
            href="/technologies"
            className="transition hover:opacity-80"
            style={{ color: colors.header.text, opacity: 0.9 }}
          >
            Tecnologias
          </Link>
          <Link
            href="/gallery"
            className="transition hover:opacity-80"
            style={{ color: colors.header.text, opacity: 0.9 }}
          >
            Galeria
          </Link>
          <Link
            href="/results"
            className="transition hover:opacity-80"
            style={{ color: colors.header.text, opacity: 0.9 }}
          >
            Resultados
          </Link>
          <Link
            href="/team"
            className="transition hover:opacity-80"
            style={{ color: colors.header.text, opacity: 0.9 }}
          >
            Equipe
          </Link>
        </nav>

        {/* Menu Mobile */}
        <button className="md:hidden p-2" style={{ color: colors.header.text }}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

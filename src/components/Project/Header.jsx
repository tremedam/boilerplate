import Image from "next/image";
import Link from "next/link";

export default function Header({ data, theme }) {
  return (
    <header
      className="sticky top-0 z-50 bg-white shadow-md"
      style={{ borderBottom: `3px solid ${theme.primary}` }}
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
              className="text-xl md:text-2xl font-bold"
              style={{ color: theme.primary }}
            >
              {data.title}
            </h1>
            <p className="text-sm text-gray-600 hidden md:block">
              {data.subtitle}
            </p>
          </div>
        </div>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="/project#about"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            Sobre
          </Link>
          <Link
            href="/features"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            Funcionalidades
          </Link>
          <Link
            href="/technologies"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            Tecnologias
          </Link>
          <Link
            href="/team"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            Equipe
          </Link>
        </nav>

        {/* Menu Mobile */}
        <button className="md:hidden p-2">
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

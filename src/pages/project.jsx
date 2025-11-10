import Head from "next/head";
import Link from "next/link";
import { projectData } from "@/data/projectData";
import Header from "@/components/Project/Header";
import HeroSection from "@/components/Project/HeroSection";
import AboutSection from "@/components/Project/AboutSection";
import Footer from "@/components/Project/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function Project() {
    const { colors } = useThemeColors();

    return (
        <>
            <Head>
                <title>{projectData.header.title}</title>
                <meta name="description" content={projectData.hero.description} />
            </Head>

            <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: colors.background }}>
                {/* Cabeçalho */}
                <Header data={projectData.header} theme={projectData.theme} />

                {/* Hero / Seção Principal */}
                <HeroSection data={projectData.hero} theme={projectData.theme} />

                {/* Sobre o Projeto */}
                <AboutSection data={projectData.about} theme={projectData.theme} />

                {/* Preview Funcionalidades */}
                <section className="py-12 transition-colors duration-300" style={{ backgroundColor: colors.background }}>
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6 transition-colors duration-300" style={{ color: colors.title }}>
                            Principais Funcionalidades
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {projectData.features.items.slice(0, 4).map((f, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 rounded-md shadow-sm transition-all duration-300"
                                    style={{
                                        backgroundColor: colors.cards.bg,
                                        borderColor: colors.cards.border,
                                        borderWidth: '1px',
                                        borderStyle: 'solid'
                                    }}
                                >
                                    <div className="text-2xl mb-2">{f.icon}</div>
                                    <h3 className="font-semibold text-sm mb-1" style={{ color: colors.cards.text }}>{f.title}</h3>
                                    <p className="text-xs" style={{ color: colors.cards.text, opacity: 0.9 }}>{f.description}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/features" className="inline-block mt-6 text-sm font-medium hover:underline transition-colors duration-300" style={{ color: colors.primary }}>
                            Ver todas as funcionalidades →
                        </Link>
                    </div>
                </section>

                {/* Preview Tecnologias */}
                <section className="py-12 transition-colors duration-300" style={{ backgroundColor: colors.background, opacity: 0.95 }}>
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6 transition-colors duration-300" style={{ color: colors.title }}>
                            Principais Tecnologias
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {projectData.technologies.items.slice(0, 4).map((t, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 rounded-md shadow-sm text-center transition-all duration-300"
                                    style={{
                                        backgroundColor: colors.cards.bg,
                                        borderColor: colors.cards.border,
                                        borderWidth: '1px',
                                        borderStyle: 'solid'
                                    }}
                                >
                                    <p className="font-semibold text-sm mb-1" style={{ color: colors.cards.text }}>{t.name}</p>
                                    <p className="text-xs" style={{ color: colors.cards.text, opacity: 0.9 }}>{t.description}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/technologies" className="inline-block mt-6 text-sm font-medium hover:underline transition-colors duration-300" style={{ color: colors.primary }}>
                            Ver todas as tecnologias →
                        </Link>
                    </div>
                </section>

                {/* Preview Equipe */}
                <section className="py-12 transition-colors duration-300" style={{ backgroundColor: colors.background }}>
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6 transition-colors duration-300" style={{ color: colors.title }}>
                            Equipe
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projectData.team.members.slice(0, 3).map((m, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 rounded-lg shadow-sm text-center transition-all duration-300"
                                    style={{
                                        backgroundColor: colors.cards.bg,
                                        borderColor: colors.cards.border,
                                        borderWidth: '1px',
                                        borderStyle: 'solid'
                                    }}
                                >
                                    <img src={m.image} alt={m.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
                                    <h3 className="text-md font-semibold" style={{ color: colors.cards.text }}>{m.name}</h3>
                                    <p className="text-xs mb-2" style={{ color: colors.cards.text, opacity: 0.9 }}>{m.role}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/team" className="inline-block mt-6 text-sm font-medium hover:underline transition-colors duration-300" style={{ color: colors.primary }}>
                            Ver equipe completa →
                        </Link>
                    </div>
                </section>

                {/* Rodapé */}
                <Footer data={projectData.footer} theme={projectData.theme} />
            </div>
            <ThemeToggle />
        </>
    );
}

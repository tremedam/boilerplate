import Head from "next/head";
import Link from "next/link";
import { projectData } from "@/data/projectData";
import Header from "@/components/Project/Header";
import HeroSection from "@/components/Project/HeroSection";
import AboutSection from "@/components/Project/AboutSection";
import Footer from "@/components/Project/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Project() {
    return (
        <>
            <Head>
                <title>{projectData.header.title}</title>
                <meta name="description" content={projectData.hero.description} />
            </Head>

            <div className="min-h-screen dark:bg-gray-900">
                {/* Cabeçalho */}
                <Header data={projectData.header} theme={projectData.theme} />

                {/* Hero / Seção Principal */}
                <HeroSection data={projectData.hero} theme={projectData.theme} />

                {/* Sobre o Projeto */}
                <AboutSection data={projectData.about} theme={projectData.theme} />

                {/* Preview Funcionalidades */}
                <section className="py-12 bg-white dark:bg-gray-800 transition-colors duration-300">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-400">
                            Principais Funcionalidades
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {projectData.features.items.slice(0, 4).map((f, idx) => (
                                <div key={idx} className="p-4 rounded-md shadow-sm border bg-blue-900 dark:bg-gray-700 border-blue-900 dark:border-gray-600">
                                    <div className="text-2xl mb-2">{f.icon}</div>
                                    <h3 className="font-semibold text-sm mb-1 text-white">{f.title}</h3>
                                    <p className="text-gray-200 dark:text-gray-300 text-xs">{f.description}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/features" className="inline-block mt-6 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                            Ver todas as funcionalidades →
                        </Link>
                    </div>
                </section>

                {/* Preview Tecnologias */}
                <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-400">
                            Principais Tecnologias
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {projectData.technologies.items.slice(0, 4).map((t, idx) => (
                                <div key={idx} className="p-4 rounded-md shadow-sm border text-center bg-blue-900 dark:bg-gray-700 border-blue-900 dark:border-gray-600">
                                    <p className="font-semibold text-sm mb-1 text-white">{t.name}</p>
                                    <p className="text-gray-200 dark:text-gray-300 text-xs">{t.description}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/technologies" className="inline-block mt-6 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                            Ver todas as tecnologias →
                        </Link>
                    </div>
                </section>

                {/* Preview Equipe */}
                <section className="py-12 bg-white dark:bg-gray-800 transition-colors duration-300">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-400">
                            Equipe
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projectData.team.members.slice(0, 3).map((m, idx) => (
                                <div key={idx} className="p-6 rounded-lg shadow-sm border text-center bg-blue-900 dark:bg-gray-700 border-blue-900 dark:border-gray-600">
                                    <img src={m.image} alt={m.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
                                    <h3 className="text-md font-semibold text-white">{m.name}</h3>
                                    <p className="text-gray-200 dark:text-gray-300 text-xs mb-2">{m.role}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/team" className="inline-block mt-6 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
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

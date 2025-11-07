import Head from "next/head";
import Link from "next/link";
import { projectData } from "@/data/projectData";
import Header from "@/components/Project/Header";
import HeroSection from "@/components/Project/HeroSection";
import AboutSection from "@/components/Project/AboutSection";
import Footer from "@/components/Project/Footer";

export default function Project() {
    return (
        <>
            <Head>
                <title>{projectData.header.title}</title>
                <meta name="description" content={projectData.hero.description} />
            </Head>

            <div className="min-h-screen">
                {/* Cabeçalho */}
                <Header data={projectData.header} theme={projectData.theme} />

                {/* Hero / Seção Principal */}
                <HeroSection data={projectData.hero} theme={projectData.theme} />

                {/* Sobre o Projeto */}
                <AboutSection data={projectData.about} theme={projectData.theme} />

                {/* Preview Funcionalidades */}
                <section className="py-12 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6" style={{ color: projectData.theme.primary }}>
                            Principais Funcionalidades
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {projectData.features.items.slice(0, 4).map((f, idx) => (
                                <div key={idx} className="p-4 rounded-md shadow-sm border bg-white" style={{ borderColor: projectData.theme.secondary + '22' }}>
                                    <div className="text-2xl mb-2">{f.icon}</div>
                                    <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
                                    <p className="text-gray-600 text-xs">{f.description}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/features" className="inline-block mt-6 text-blue-600 hover:underline text-sm font-medium">
                            Ver todas as funcionalidades →
                        </Link>
                    </div>
                </section>

                {/* Preview Tecnologias */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6" style={{ color: projectData.theme.primary }}>
                            Principais Tecnologias
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {projectData.technologies.items.slice(0, 4).map((t, idx) => (
                                <div key={idx} className="p-4 rounded-md shadow-sm border bg-white text-center" style={{ borderColor: projectData.theme.secondary + '22' }}>
                                    <p className="font-semibold text-sm mb-1">{t.name}</p>
                                    <p className="text-gray-600 text-xs">{t.description}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/technologies" className="inline-block mt-6 text-blue-600 hover:underline text-sm font-medium">
                            Ver todas as tecnologias →
                        </Link>
                    </div>
                </section>

                {/* Preview Equipe */}
                <section className="py-12 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6" style={{ color: projectData.theme.primary }}>
                            Equipe
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projectData.team.members.slice(0, 3).map((m, idx) => (
                                <div key={idx} className="p-6 rounded-lg shadow-sm border bg-white text-center" style={{ borderColor: projectData.theme.secondary + '22' }}>
                                    <img src={m.image} alt={m.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
                                    <h3 className="text-md font-semibold">{m.name}</h3>
                                    <p className="text-gray-600 text-xs mb-2">{m.role}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/team" className="inline-block mt-6 text-blue-600 hover:underline text-sm font-medium">
                            Ver equipe completa →
                        </Link>
                    </div>
                </section>

                {/* Rodapé */}
                <Footer data={projectData.footer} theme={projectData.theme} />
            </div>
        </>
    );
}

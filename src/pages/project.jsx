import Head from "next/head";
import { projectData } from "@/data/projectData";
import Header from "@/components/Project/Header";
import HeroSection from "@/components/Project/HeroSection";
import AboutSection from "@/components/Project/AboutSection";
import FeaturesSection from "@/components/Project/FeaturesSection";
import TechnologiesSection from "@/components/Project/TechnologiesSection";
import TeamSection from "@/components/Project/TeamSection";
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

                {/* Funcionalidades */}
                <FeaturesSection data={projectData.features} theme={projectData.theme} />

                {/* Tecnologias */}
                <TechnologiesSection
                    data={projectData.technologies}
                    theme={projectData.theme}
                />

                {/* Equipe */}
                <TeamSection data={projectData.team} theme={projectData.theme} />

                {/* Rodapé */}
                <Footer data={projectData.footer} theme={projectData.theme} />
            </div>
        </>
    );
}

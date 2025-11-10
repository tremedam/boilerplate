import Head from "next/head";
import { projectData } from "@/data/projectData";
import Header from "@/components/Project/Header";
import Results from "@/components/Project/Results";
import Footer from "@/components/Project/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function ResultsPage() {
    const { colors } = useThemeColors();

    return (
        <>
            <Head>
                <title>{`Resultados - ${projectData.header.title}`}</title>
                <meta name="description" content={projectData.results.title} />
            </Head>

            <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: colors.background }}>
                <Header data={projectData.header} theme={projectData.theme} />
                <Results />
                <Footer data={projectData.footer} theme={projectData.theme} />
            </div>
            <ThemeToggle />
        </>
    );
}

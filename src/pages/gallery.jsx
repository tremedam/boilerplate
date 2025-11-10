import Head from "next/head";
import { projectData } from "@/data/projectData";
import Header from "@/components/Project/Header";
import Gallery from "@/components/Project/Gallery";
import Footer from "@/components/Project/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function GalleryPage() {
    const { colors } = useThemeColors();

    return (
        <>
            <Head>
                <title>{`Galeria - ${projectData.header.title}`}</title>
                <meta name="description" content={projectData.gallery.title} />
            </Head>

            <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: colors.background }}>
                <Header data={projectData.header} theme={projectData.theme} />
                <Gallery />
                <Footer data={projectData.footer} theme={projectData.theme} />
            </div>
            <ThemeToggle />
        </>
    );
}

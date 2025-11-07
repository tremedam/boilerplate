import Head from "next/head";
import Header from "@/components/Project/Header";
import Footer from "@/components/Project/Footer";

export default function ProjectLayout({
    children,
    headerData,
    footerData,
    theme,
    title,
    description,
}) {
    return (
        <>
            <Head>
                {title && <title>{title}</title>}
                {description && (
                    <meta name="description" content={description} />
                )}
            </Head>
            <div className="min-h-screen flex flex-col">
                <Header data={headerData} theme={theme} />
                <main className="flex-1">
                    {children}
                </main>
                <Footer data={footerData} theme={theme} />
            </div>
        </>
    );
}

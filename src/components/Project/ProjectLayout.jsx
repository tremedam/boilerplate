import Head from "next/head";
import Header from "@/components/Project/Header";
import Footer from "@/components/Project/Footer";
import ThemeToggle from "@/components/ThemeToggle";

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
            <div className="min-h-screen flex flex-col dark:bg-gray-900">
                <Header data={headerData} theme={theme} />
                <main className="flex-1">
                    {children}
                </main>
                <Footer data={footerData} theme={theme} />
                <ThemeToggle />
            </div>
        </>
    );
}

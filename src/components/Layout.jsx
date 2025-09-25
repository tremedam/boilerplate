import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="max-w-6xl mx-auto p-4">
                {children}
            </main>
            <Footer />
        </>
    );
}
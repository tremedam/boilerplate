import Layout from "@/components/Layout";

export default function Home() {
    return (
        <Layout>
            <h2 className="text-2xl font-semibold mb-4">Bem-vindo ao Template!</h2>
            <p className="mb-4">Este é um site base criado em Next.js + Tailwind.</p>
            <a href="/about" className="bg-blue-600 text-white px-4 py-2 rounded">
                Saiba mais
            </a>
        </Layout>
    );
}
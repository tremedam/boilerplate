import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-blue-600 text-white p-4">
            <nav className="flex justify-between items-center max-w-6xl mx-auto">
                <Link href="/">
                    <h1 className="text-xl font-bold cursor-pointer hover:text-blue-200">Titulo/Logo</h1>
                </Link>
                <ul className="flex space-x-4">
                    <li><Link href="/" className="hover:underline">Home</Link></li>
                    <li><Link href="/about" className="hover:underline">Sobre</Link></li>
                    <li><Link href="/contact" className="hover:underline">Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default function Header() {
    return (
        <header className="bg-blue-600 text-white p-4">
            <nav className="flex justify-between items-center max-w-6xl mx-auto">
                <h1 className="text-xl font-bold">Meu template geral</h1>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Sobre</a></li>
                    <li><a href="#" className="hover:underline">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}
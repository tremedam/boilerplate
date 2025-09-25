export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-center p-4 mt-6">
            <div className="max-w-6xl mx-auto">
                <p>@copy; {new Date().getFullYear()} Meu template reutilizavel geral - todos os direitos reservados</p>
            </div>
        </footer>
    );
}

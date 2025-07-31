import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-pink-500 flex items-center gap-2">
                    <span className="text-3xl">🍭</span>
                    Pirulito Shop
                </Link>

                {/* Links de Navegação */}
                <div className="flex items-center gap-6">
                    <Link href="/" className="text-gray-600 hover:text-pink-500">
                        Início
                    </Link>
                    <Link href="/favoritos" className="text-gray-600 hover:text-pink-500">
                        Favoritos (0)
                    </Link>
                    <button className="bg-red-500 text-white font-bold py-2 px-6 rounded-md hover:bg-red-600 transition-colors">
                        Login
                    </button>
                </div>
            </nav>
        </header>
    );
}
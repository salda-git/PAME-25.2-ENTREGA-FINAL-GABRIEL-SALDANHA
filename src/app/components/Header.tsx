"use client";
// transformei em side bar
import Link from "next/link";
import { useFavorites } from "../contexts/FavoritesContext";

export default function Header() {
    const { favorites } = useFavorites();

    return (
        <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200">
            <div className="flex flex-col h-full p-4">

                {/* 2. Logo na parte superior */}
                <div className="mb-10">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold text-pink-500">
                        <span className="text-3xl">🍭</span>
                        Pirulito Shop
                    </Link>
                </div>

                {/* 3. Itens de navegação organizados em coluna */}
                <nav className="flex flex-col gap-2">
                    <Link href="/" className="flex items-center gap-3 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
                        {/* Futuramente, você pode adicionar um ícone aqui */}
                        <span>Início</span>
                    </Link>
                    <Link href="/favoritos" className="flex items-center gap-3 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
                        <span>Favoritos ({favorites.length})</span>
                    </Link>
                    <Link href="/produtos" className="flex items-center gap-3 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
                        {/* Adicionei um link para a página de produtos como exemplo */}
                        <span>Todos os Produtos</span>
                    </Link>
                </nav>

                {/* 4. Itens no final da sidebar (estilo Instagram) */}
                <div className="mt-auto">
                    <Link href="/login" className="flex items-center gap-3 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
                        <span>Login</span>
                    </Link>
                </div>

            </div>
        </aside>
    );
}
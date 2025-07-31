
"use client";
import Link from "next/link";
import { useFavorites } from "../contexts/FavoritesContext";

export default function Header() {
    const { favorites } = useFavorites(); // Pega a lista de favoritos

    return (
        <header className="bg- shadow-sm">
            <nav className="container mx-auto flex items-center justify-between x-4 py-4">

                <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-pink-500">
                    <span className="text-3xl">🍭</span>
                    Pirulito Shop
                </Link>


                <div className="flex items-center gap-6">
                    <Link href="/" className="text-gray-600 hover:text-pink-500">
                        Início
                    </Link>
                    <Link href="/favoritos" className="text-gray-600 hover:text-pink-500">
                        Favoritos ({favorites.length})
                    </Link>
                    <Link href="/login" className="rounded bg-red-500 py-2 px-6 font-bold text-white transition-colors hover:bg-red-600">
                        Login
                    </Link>
                </div>
            </nav>
        </header>
    );
}
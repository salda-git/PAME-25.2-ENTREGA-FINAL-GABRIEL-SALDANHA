// src/components/Header.tsx
"use client";

import Link from "next/link";
import { useFavorites } from "../contexts/FavoritesContext";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Header() {
    const { favorites } = useFavorites();
    const { isAuthenticated, logout } = useAuth(); // 2. PEGUE O ESTADO E A FUNÇÃO DE LOGOUT
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/'); // Redireciona para a home após o logout
    };

    return (
        <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200">
            <div className="flex flex-col h-full p-4">
                <div className="mb-10">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold text-pink-500">
                        <span className="text-3xl">🍭</span>
                        Pirulito Shop
                    </Link>
                </div>

                <nav className="flex flex-col gap-2">
                    {/* ... links de Início, Favoritos, etc. ... */}
                    <Link href="/" className="flex items-center gap-3 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
                        <span>Início</span>
                    </Link>
                    <Link href="/favoritos" className="flex items-center gap-3 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
                        <span>Favoritos ({favorites.length})</span>
                    </Link>
                </nav>

            
                <div className="mt-auto flex flex-col gap-2">
                    {isAuthenticated ? (
                        // Se estiver logado:
                        <>
                            <Link href="/perfil" className="flex items-center gap-3 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
                                <span>Meu Perfil</span>
                            </Link>
                            <button onClick={handleLogout} className="flex items-center text-left gap-3 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
                                <span>Sair</span>
                            </button>
                        </>
                    ) : (
                        // Se NÃO estiver logado:
                        <>
                            <Link href="/login" className="flex items-center gap-3 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
                                <span>Fazer Login</span>
                            </Link>
                            <Link href="/cadastro" className="flex items-center gap-3 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
                                <span>Cadastre-se</span>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </aside>
    );
}
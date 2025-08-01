"use client";

import Link from "next/link";
import { useFavorites } from "../contexts/FavoritesContext";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
// 1. IMPORTE OS ÍCONES
import { Home, Heart, ShoppingBag, User, LogIn, LogOut } from 'lucide-react';

export default function Header() {
    const { favorites } = useFavorites();
    const { isAuthenticated, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => { /* ... */ };

    return (
        <aside className="fixed top-0 borderleft-0 h-screen w-64 bg-[var(--cor-creme-fundo)] border-r border-gray-200">
            <div className="flex flex-col h-full p-4">
                {/* ... Logo ... */}
                <nav className="flex flex-col gap-2">
                    <Link href="/" className="mb-4 flex justify-center">
                        <img src="/logo3.png" alt="Logo Pequeno" className="w-50 h-auto" />
                    </Link>
                    {/* 2. ADICIONE O COMPONENTE DO ÍCONE */}
                    <Link href="/" className="flex items-center gap-3 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
                        <Home size={20} />
                        <span>Início</span>
                    </Link>
                    <Link href="/favoritos" className="flex items-center gap-3 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
                        <Heart size={20} />
                        <span>Favoritos ({favorites.length})</span>
                    </Link>
                    {/* ... outros links com seus respectivos ícones ... */}
                </nav>
                <div className="mt-auto flex flex-col gap-2">
                    {isAuthenticated ? (
                        <>
                            <Link href="/perfil" className="flex items-center gap-3 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
                                <User size={20} />
                                <span>Meu Perfil</span>
                            </Link>
                            <button onClick={handleLogout} className="flex items-center text-left gap-3 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
                                <LogOut size={20} />
                                <span>Sair</span>
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="flex items-center gap-3 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
                                <LogIn size={20} />
                                <span>Fazer Login</span>
                            </Link>
                            {/* ... link de cadastro ... */}
                        </>
                    )}
                </div>
            </div>
        </aside>
    );
}
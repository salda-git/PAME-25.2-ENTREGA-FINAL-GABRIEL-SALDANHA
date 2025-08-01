"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useFavorites } from "../contexts/FavoritesContext";
import { useAuth } from "../context/AuthContext";
import { Home, Heart, User, LogIn, LogOut, ShoppingBag } from 'lucide-react';

export default function Header() {
    const { favorites } = useFavorites();
    const { isAuthenticated, logout, user } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    const getLinkClasses = (path: string) => {
        const baseClasses = "flex items-center gap-3 p-3 rounded-lg transition-colors";
        const activeClasses = "bg-pink-100 text-pink-700 font-semibold";
        const inactiveClasses = "text-gray-600 hover:bg-gray-100 hover:text-gray-900";

        return `${baseClasses} ${pathname === path ? activeClasses : inactiveClasses}`;
    };

    return (
        <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 shadow-lg flex flex-col">

            {/* LOGO */}
            <div className="px-4 pt-4 pb-4 border-b border-gray-200">
                <Link href="/" className="flex justify-center">
                    <img src="/logo3.png" alt="Pirulito Shop Logo" className="h-10 w-auto" />
                </Link>
            </div>

            <div className="p-4 flex-grow">
                <nav className="flex flex-col gap-2">
                    <Link href="/" className={getLinkClasses("/")}>
                        <Home size={20} />
                        <span>Início</span>
                    </Link>
                    <Link href="/favoritos" className={getLinkClasses("/favoritos")}>
                        <Heart size={20} />
                        <span>Favoritos ({favorites.length})</span>
                    </Link>
                    <Link href="/produtos" className={getLinkClasses("/produtos")}>
                        <ShoppingBag size={20} />
                        <span>Produtos</span>
                    </Link>
                </nav>
            </div>

            {/* SEÇÃO DO USUÁRIO / LOGIN (no rodapé da sidebar) */}
            <div className="p-4 border-t border-gray-200">
                {isAuthenticated ? (
                    <div className="flex flex-col gap-2">
                        <Link href="/perfil" className={getLinkClasses("/perfil")}>
                            <div className="w-7 h-7 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 font-bold text-sm">
                                {user?.name.charAt(0)}
                            </div>
                            <span className="font-semibold">{user?.name}</span>
                        </Link>
                        <button onClick={handleLogout} className="flex items-center text-left gap-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors w-full">
                            <LogOut size={20} />
                            <span>Sair</span>
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col gap-2">
                        <Link href="/login" className={getLinkClasses("/login")}>
                            <LogIn size={20} />
                            <span>Fazer Login</span>
                        </Link>
                    </div>
                )}
            </div>
        </aside>
    );
}
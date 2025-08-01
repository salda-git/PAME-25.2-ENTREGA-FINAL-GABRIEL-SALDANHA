"use client";

import { Search } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            alert(`Você pesquisou por: ${searchTerm}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="relative w-full">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar produtos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2">
                <Search size={20} className="text-gray-400" />
            </button>
        </form>
    );
}
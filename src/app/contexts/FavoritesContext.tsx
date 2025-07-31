//lógica dos favoritos

"use client"; 

import { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '../data/products'; 


interface FavoritesContextType {
    favorites: Product[];
    toggleFavorite: (product: Product) => void;
    isFavorite: (productId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
    const [favorites, setFavorites] = useState<Product[]>([]);

    const toggleFavorite = (product: Product) => {
        setFavorites(prevFavorites => {
            // Verifica se o produto já está nos favoritos
            const isAlreadyFavorite = prevFavorites.some(fav => fav.id === product.id);

            if (isAlreadyFavorite) {
                // Se já for favorito, remove da lista
                return prevFavorites.filter(fav => fav.id !== product.id);
            } else {
                // Se não for, adiciona na lista
                return [...prevFavorites, product];
            }
        });
    };

    const isFavorite = (productId: number) => {
        return favorites.some(fav => fav.id === productId);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

// 4. Cria um Hook customizado para facilitar o uso do contexto
export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
}
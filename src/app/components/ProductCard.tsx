// src/components/ProductCard.tsx
"use client";

import Link from "next/link"; // ERRO 4 CORRIGIDO: Importação do Link
import { Product } from "../data/products";
import { useFavorites } from "../contexts/FavoritesContext";

const LollipopIcon = () => (
    <div className="text-4xl bg-rose-100 p-3 rounded-full inline-block mb-4">
        🍭
    </div>
);

// A prop { product } estava sendo passada de forma incorreta, corrigido para o padrão.
export default function ProductCard({ product }: { product: Product }) {
    const { toggleFavorite, isFavorite } = useFavorites();
    const isCurrentlyFavorite = isFavorite(product.id);

    // ERRO 1 CORRIGIDO: Usando parêntese () em vez de colchete []
    return (
        // ERRO 2 e 3 CORRIGIDOS: Classes limpas, em minúsculo e com justify-between
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between">

            {/* Parte clicável do card */}
            <Link href={`/produtos/${product.id}`}>
                {/* ERRO 2 CORRIGIDO: 'flex-grow' em minúsculo */}
                <div className="flex-grow">
                    <LollipopIcon />
                    <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                    <p className="text-gray-500 mt-1">Sabor: {product.flavor}</p>
                    <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
                </div>
            </Link>

            {/* Parte de baixo com preço e botões */}
            <div className="mt-6">
                <p className="text-2xl font-bold text-red-500 mb-4">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => toggleFavorite(product)}
                        className={`flex-1 text-center py-2 px-4 rounded-md transition-colors ${isCurrentlyFavorite
                            ? 'bg-pink-500 text-white hover:bg-pink-600'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                    >
                        {isCurrentlyFavorite ? 'Favoritado ♥' : 'Favoritar'}
                    </button>
                    <button className="flex-1 text-center bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}
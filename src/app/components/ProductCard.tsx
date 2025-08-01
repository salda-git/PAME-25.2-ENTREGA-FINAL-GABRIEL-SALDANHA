// src/components/ProductCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "../data/products";
import { useFavorites } from "../contexts/FavoritesContext";

export default function ProductCard({ product }: { product: Product }) {
    const { toggleFavorite, isFavorite } = useFavorites();
    const isCurrentlyFavorite = isFavorite(product.id);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            
            <div>
                {/* AQUI ESTÁ A MUDANÇA PARA A COR DE FUNDO DINÂMICA */}
                <div className={`relative w-full h-48 mb-4 rounded-lg overflow-hidden ${product.cardColor}`}>
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-contain object-center"
                    />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                <p className="text-gray-500 mt-1">Sabor: {product.flavor}</p>
                <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
            </div>

            <div className="mt-6">
                <p className="text-2xl font-bold text-red-500 mb-4">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
                <Link
                    href={`/produtos/${product.id}`}
                    className="block w-full text-center bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors mb-2"
                >
                    Ver mais
                </Link>
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


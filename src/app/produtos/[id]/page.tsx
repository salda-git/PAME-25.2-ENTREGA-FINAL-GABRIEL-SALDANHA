"use client";

import { products } from "@/app/data/products";
import { useFavorites } from "@/app/contexts/FavoritesContext";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const productId = parseInt(params.id, 10);
    const product = products.find(p => p.id === productId);

    if (!product) {
        notFound();
        return null;
    }
    const { toggleFavorite, isFavorite } = useFavorites();
    const isCurrentlyFavorite = isFavorite(product.id);

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">

                {/* ÁREA DA IMAGEM CORRIGIDA */}
                <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
                    <div className="relative w-full h-80">
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Coluna da Direita: Detalhes */}
                <div>
                    <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
                    <p className="text-lg text-gray-500 mt-2">{product.description}</p>
                    <p className="text-4xl font-bold text-red-500 my-6">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                    </p>

                    {/* Botões */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => toggleFavorite(product)}
                            className={`flex-1 text-center py-3 px-6 rounded-md transition-colors text-lg font-bold ${isCurrentlyFavorite
                                ? 'bg-pink-500 text-white hover:bg-pink-600'
                                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                }`}
                        >
                            {isCurrentlyFavorite ? 'Favoritado ♥' : 'Favoritar'}
                        </button>
                        <button className="flex-1 text-center bg-red-500 text-white font-bold py-3 px-6 rounded-md hover:bg-red-600 transition-colors text-lg">
                            Comprar
                        </button>
                    </div>

                    {/* Detalhes Adicionais */}
                    <div className="mt-10">
                        {/* Composição */}
                        <div className="mb-6">
                            <h3 className="font-bold text-xl mb-2">Composição</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                {product.composition.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </div>

                        {/* Tabela Nutricional */}
                        <div>
                            <h3 className="font-bold text-xl mb-2">Tabela Nutricional</h3>
                            <div className="border rounded-lg p-4">
                                {Object.entries(product.nutritionalFacts).map(([key, value]) => (
                                    <div key={key} className="flex justify-between py-2 border-b last:border-b-0">
                                        <span className="font-semibold text-gray-700">{key}</span>
                                        <span className="text-gray-600">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
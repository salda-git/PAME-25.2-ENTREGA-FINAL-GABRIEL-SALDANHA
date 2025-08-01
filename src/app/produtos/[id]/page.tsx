"use client";

import { products } from "./../../data/products";
import { useFavorites } from "./../../contexts/FavoritesContext";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Componente reutilizável para o nosso Acordeão
const AccordionItem = ({ title, isOpen, onToggle, children }: { title: string, isOpen: boolean, onToggle: () => void, children: React.ReactNode }) => (
  <div className="border-b">
    <button onClick={onToggle} className="w-full flex justify-between items-center py-4 text-left">
      <span className="text-lg font-semibold text-gray-800">{title}</span>
      <ChevronDown
        className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        size={20}
      />
    </button>
    {isOpen && (
      <div className="pb-4 text-gray-600">
        {children}
      </div>
    )}
  </div>
);

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const productId = parseInt(params.id, 10);
    const product = products.find(p => p.id === productId);

    const [compositionOpen, setCompositionOpen] = useState(true);
    const [nutritionOpen, setNutritionOpen] = useState(false);

    if (!product) {
        notFound();
        return null;
    }
    const { toggleFavorite, isFavorite } = useFavorites();
    const isCurrentlyFavorite = isFavorite(product.id);

    return (
        <main className="px-6 py-12 sm:px-8 md:px-16">
            <div className="max-w-7xl mx-auto">
                
                <div className="text-sm text-gray-500 mb-8">
                  <Link href="/" className="hover:text-pink-600">Início</Link>
                  <span className="mx-2">/</span>
                  <Link href="/" className="hover:text-pink-600">Produtos</Link>
                  <span className="mx-2">/</span>
                  <span className="font-semibold text-gray-700">{product.name}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
                    
                    <div className="p-8 rounded-lg flex items-center justify-center">
                        <div className="relative w-full h-80">
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-4">
                            {product.flavor}
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">{product.name}</h1>
                        <p className="text-lg text-gray-600 mt-4 leading-relaxed">{product.description}</p>
                        
                        <p className="text-5xl font-bold text-red-500 my-8">
                            R$ {product.price.toFixed(2).replace('.', ',')}
                        </p>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => toggleFavorite(product)}
                                className={`flex-1 text-center py-3 px-6 rounded-lg transition-colors text-lg font-bold ${isCurrentlyFavorite ? 'bg-pink-500 text-white hover:bg-pink-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                            >
                                {isCurrentlyFavorite ? 'Favoritado ♥' : 'Favoritar'}
                            </button>
                            <button className="flex-1 text-center bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition-colors text-lg shadow-md hover:shadow-lg">
                                Comprar
                            </button>
                        </div>

                        <div className="mt-12">
                            <AccordionItem 
                                title="Composição"
                                isOpen={compositionOpen}
                                onToggle={() => setCompositionOpen(!compositionOpen)}
                            >
                                <ul className="list-disc list-inside space-y-1">
                                    {product.composition.map(item => <li key={item}>{item}</li>)}
                                </ul>
                            </AccordionItem>
                            
                            <AccordionItem
                                title="Tabela Nutricional"
                                isOpen={nutritionOpen}
                                onToggle={() => setNutritionOpen(!nutritionOpen)}
                            >
                                <div className="space-y-2">
                                    {Object.entries(product.nutritionalFacts).map(([key, value]) => (
                                        <div key={key} className="flex justify-between">
                                            <span>{key}</span>
                                            <span className="font-semibold">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </AccordionItem>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
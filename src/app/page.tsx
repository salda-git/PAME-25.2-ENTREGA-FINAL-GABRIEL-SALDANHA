"use client";

import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import { CheckCircle2 } from 'lucide-react';
import { Search } from "lucide-react";
import Link from "next/link";


export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        const lowercasedFilter = searchTerm.toLowerCase();
        const newFilteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(lowercasedFilter)
        );
        setFilteredProducts(newFilteredProducts);
    }, [searchTerm]);

    return (
        <div className="">
            <section className="text-center py-20 px-6">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight">
                    O Sabor da Alegria em Cada Pirulito
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    Feitos com ingredientes reais e um toque de magia. Descubra um mundo de sabores que vai encantar o seu dia.
                </p>
                <div className="mt-8">
                    <Link href="#produtos" className="inline-block bg-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-pink-600 transition-transform hover:scale-105">
                        Ver Produtos
                    </Link>
                </div>
            </section>

            {/* Seção de Produtos */}
            <section id="produtos" className=" px-6 py-16 sm:px-8 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800">
                            Nossos Produtos
                        </h2>
                        <p className="mt-2 text-gray-500">
                            Uma seleção especial dos nossos melhores sabores.
                        </p>
                    </div>

                    {/*  BARRA DE BUSCA */}
                    <div className="mb-12 flex justify-center">
                        <div className="relative w-full max-w-lg">
                            <input
                                type="text"
                                placeholder="Buscar por nome do pirulito..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full text-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            <Search size={22} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    {/* GRADE DE PRODUTOS  */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <p className="col-span-full text-center text-gray-500 text-lg">
                            Nenhum produto encontrado com o nome "{searchTerm}".
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
}
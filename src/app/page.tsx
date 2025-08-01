import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import { CheckCircle2 } from 'lucide-react';

export default function Home() {
    return (
        // Container principal que define o espaçamento geral (padding) para as bordas da tela
        <div className="px-6 py-16 sm:px-8 md:px-16">

            {/* Container que limita a largura máxima do conteúdo e o centraliza */}
            <div className="max-w-7xl mx-auto">

                {/* --- HERO SECTION --- */}
                <section className="text-center pt-16 pb-24">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-dark-text">
                        O Sabor da Alegria em Cada Pirulito
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-8">
                        Feitos com ingredientes reais e um toque de magia. Descubra um mundo de sabores que vai encantar o seu dia.
                    </p>
                    <a
                        href="#produtos"
                        className="inline-block bg-pirulito-red text-gray-400 font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform hover:scale-105 shadow-lg"
                    >
                        Ver Produtos
                    </a>
                </section>

                {/* --- BARRA DE QUALIDADES --- */}
                {/* Estilo atualizado para bg-white e shadow-md, consistente com os cards */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-24">
                    <ul className="flex flex-col items-start gap-4 md:flex-row md:justify-around md:items-center">
                        <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-pink-500" /><span className="font-semibold text-slate-700">100% Artesanal</span></li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-pink-500" /><span className="font-semibold text-slate-700">Frutas e Ingredientes Reais</span></li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-pink-500" /><span className="font-semibold text-slate-700">Sem Açúcar</span></li>
                    </ul>
                </div>

                {/* --- SEÇÃO DE PRODUTOS --- */}
                <section id="produtos" className="pt-16">
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-4">
                            Nossos Produtos
                        </h2>
                        <p className="text-lg text-gray-500 mb-12">
                            Uma seleção especial dos nossos melhores sabores.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import { CheckCircle2 } from 'lucide-react';

export default function Home() {
    return (
        // Este é o ÚNICO container que controla o espaçamento geral da página
        <div className="px-6 py-12 sm:px-8 md:px-16">

            {/* Barra de Qualidades */}
            <div className="border border-gray-500 rounded-lg p-8 mb-10">
                <ul className="flex flex-col items-start gap-4 md:flex-row md:justify-around md:items-center">
                    <li className="flex items-center gap-2">
                        <CheckCircle2 size={20} className="text-pink-500" />
                        <span className="font-semibold text-slate-700">100% Artesanal</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle2 size={20} className="text-pink-500" />
                        <span className="font-semibold text-slate-700">Frutas e Ingredientes Reais</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle2 size={20} className="text-pink-500" />
                        <span className="font-semibold text-slate-700">Sem Açúcar</span>
                    </li>
                </ul>
            </div>

            <h1 className="text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-12">
                Nossos Produtos
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </div>
    );
}
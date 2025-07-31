// src/components/ProductCard.tsx
import { Product } from "../data/products"; // <--- Caminho corrigido

interface ProductCardProps {
    product: Product;
}

const LollipopIcon = () => (
    <div className="text-4xl bg-rose-100 p-3 rounded-full inline-block mb-4">
        🍭
    </div>
);

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col">
            <div className="flex-grow">
                <LollipopIcon />
                <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                <p className="text-gray-500 mt-1">Sabor: {product.flavor}</p>
                <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
            </div>

            <div className="mt-6">
                <p className="text-2xl font-bold text-red-500 mb-4">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
                <div className="flex items-center gap-2">
                    <button className="flex-1 text-center bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
                        Favoritar
                    </button>
                    <button className="flex-1 text-center bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}
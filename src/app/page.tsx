import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function Home() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">
                    Nossos Pirulitos
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* card para cada produto*/}
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
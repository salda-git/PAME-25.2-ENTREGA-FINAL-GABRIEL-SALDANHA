
"use client";
import ProductCard from "../components/ProductCard";

import { useFavorites } from "../contexts/FavoritesContext";

export default function FavoritosPage() {
    // Agora o useFavorites() terá acesso ao estado do cliente
    const { favorites } = useFavorites();

    return (
        <main >
            <div className="container mx-auto px-4 py-12">
                <h1 className="mb-4 text-4xl font-bold text-gray-800">
                    Meus Favoritos
                </h1>

                {favorites.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {favorites.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">
                        Você ainda não tem favoritos.
                    </p>
                )}
            </div>
        </main>
    );
}
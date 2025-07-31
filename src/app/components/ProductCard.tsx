// src/app/components/ProductCard.tsx
import React from 'react';
import BotaoComprar from './BotaoComprar'; // Reutilizamos o BotaoComprar

interface ProductCardProps {
    imageSrc: string;
    name: string;
    price: string;
}

export default function ProductCard({ imageSrc, name, price }: ProductCardProps) {
    return (
        // Este div atua como o container de cada card de produto
        // 'flex flex-col' para empilhar itens verticalmente
        // 'justify-between' para espaçar os grupos de itens (topo, meio, base)
        // 'items-center' para centralizar horizontalmente todos os itens dentro do card
        <div className="rounded-2xl w-[368px] h-[450px] border-[3px] border-gray-500 bg-white shadow-lg flex flex-col justify-between items-center p-4">

            {/* 1. Nome do produto (agora no topo) */}
            <h3 className='text-lg font-semibold text-gray-800 text-center mb-2'>{name}</h3> {/* Adicionado mb-2 para margem inferior */}

            {/* 2. Imagem do produto (centralizada) */}
            {/* 'mx-auto' ajuda a centralizar a imagem se ela não ocupar a largura total do seu div pai */}
            <img
                src={imageSrc}
                alt={name}
                className='w-full h-auto object-contain mb-4 mx-auto' // Adicionado mx-auto para centralizar
                style={{ maxHeight: '180px' }}
            />

            {/* 3. Preço e Botão de Comprar (agrupados na parte inferior) */}
            {/* 'flex flex-col' para empilhar preço e botão verticalmente */}
            {/* 'items-center' para centralizar preço e botão entre si */}
            <div className="flex flex-col items-center w-full"> {/* Adicionado w-full para o div ocupar a largura total */}
                <p className='text-gray-600 text-base mb-2'>{price}</p> {/* Adicionado mb-2 para margem inferior */}
                <BotaoComprar />
            </div>

        </div>
    );
}
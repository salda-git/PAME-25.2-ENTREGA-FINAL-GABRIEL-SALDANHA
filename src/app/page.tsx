import InfoBar from './components/InfoBar';
import BotaoComprar from './components/BotaoComprar';
import ProductCard from './components/ProductCard'
import Footer from './components/footer';
export default function Home() {

  return (
    <main>
      {/* Este é o container-pai que alinha tudo na página */}
      <div className="">
        <div className='flex bg-red-300 w-full h-160'>
          <div className='flex w-[50%] h-full bg-amber-300' >

          </div>

        </div>

        <InfoBar />
        <h2 className='font-bold flex text-center justify-center text-3xl p-4' >
          Conheça nossos produtos
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">

          {/* Primeiro Produto */}
          <ProductCard
            imageSrc="/images/chocolate_raspberry_3pk.png" // Caminho para sua imagem na pasta public
            name="Chocolate Raspberry Cacao 3pk"
            price="R$ 15,90"
          />

          {/* Segundo Produto */}
          <ProductCard
            imageSrc="/images/matcha_lemon_3pk.png" // Outro caminho de imagem
            name="Matcha Lemon 3pk"
            price="R$ 14,50"
          />

          {/* Terceiro Produto */}
          <ProductCard
            imageSrc="/images/mango_turmeric_3pk.png" // Outro caminho de imagem
            name="Mango Turmeric 3pk"
            price="R$ 16,20"
          />

          <ProductCard
            imageSrc="/images/chocolate_raspberry_3pk.png" // Caminho para sua imagem na pasta public
            name="Chocolate Raspberry Cacao 3pk"
            price="R$ 15,90"
          />

          {/* Segundo Produto */}
          <ProductCard
            imageSrc="/images/matcha_lemon_3pk.png" // Outro caminho de imagem
            name="Matcha Lemon 3pk"
            price="R$ 14,50"
          />

          {/* Terceiro Produto */}
          <ProductCard
            imageSrc="/images/mango_turmeric_3pk.png" // Outro caminho de imagem
            name="Mango Turmeric 3pk"
            price="R$ 16,20"
          />

        </div>
      </div>
    </main>
  );
}
import InfoBar from './components/InfoBar';
import BotaoComprar from './components/BotaoComprar';

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
        


      </div>
    </main>
  );
}
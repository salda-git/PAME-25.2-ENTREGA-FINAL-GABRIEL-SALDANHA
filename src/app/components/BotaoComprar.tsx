import Link from "next/link";
interface BotaoComprarProps {

}

export default function BotaoComprar() {
    return (
        <Link href={"/"} className="flex h-[10vh] w-[20vw]">
            <button
                className="
                bg-black
                 w-[100%]
                 text-white
                 font-semibold
                 py-2
                 px-6
                 rounded-full
                 transition-colors
                 hover:bg-gray-700
                 active:bg-gray-800                 
                 " >
                Comprar
            </button>
        </Link>
    )
}
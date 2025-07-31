// src/app/login/page.tsx
import Link from 'next/link';


export default function LoginPage() {
    return (
        <main className="flex h-40% items-center justify-center p-54">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
                <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
                    Login
                </h1>
                <form>
                    {/* Campo de Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="mb-2 block text-sm font-bold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="seuemail@exemplo.com"
                            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        />
                    </div>
                    {/* Campo de Senha */}
                    <div className="mb-6">
                        <label htmlFor="password" className="mb-2 block text-sm font-bold text-gray-700">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="********"
                            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        />
                    </div>
                    {/* Botão de Entrar */}
                    <button
                        type="submit"
                        className="focus:shadow-outline w-full rounded bg-red-500 py-2 px-4 font-bold text-white transition-colors hover:bg-red-600 focus:outline-none"
                    >
                        Entrar
                    </button>


                    {/* TEXTO E LINK ADICIONADOS AQUI */}
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Novo na loja?{' '}
                        <Link href="/cadastro" className="font-bold text-red-500 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>


                </form>
            </div>
        </main>
    );
}
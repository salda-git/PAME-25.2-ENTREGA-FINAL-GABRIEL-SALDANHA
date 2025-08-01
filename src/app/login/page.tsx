"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Hook para redirecionamento
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault(); // Impede o recarregamento da página

        // 1. Chama a função de login do nosso contexto
        login();

        // 2. Redireciona o usuário para a página de perfil
        router.push('/perfil');
    };

    return (
        <main className="flex flex-col items-center justify-center p-8">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
                <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
                    Login
                </h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="mb-2 block text-sm font-bold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Qualquer email é válido"
                            className="focus:shadow-outline w-full rounded border px-3 py-2"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="mb-2 block text-sm font-bold text-gray-700">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Qualquer senha é válida"
                            className="focus:shadow-outline w-full rounded border px-3 py-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="focus:shadow-outline w-full rounded bg-red-500 py-2 px-4 font-bold text-white transition-colors hover:bg-red-600 focus:outline-none"
                    >
                        Entrar
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Novo na loja?{' '}
                    <Link href="/cadastro" className="font-bold text-red-500 hover:underline">
                        Cadastre-se
                    </Link>
                </p>
            </div>
        </main>
    );
}
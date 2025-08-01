import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// CORREÇÃO: Os caminhos devem sair da pasta 'app' com '../'
import Header from "./components/Header";
import { useFavorites } from "./contexts/FavoritesContext";
import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pirulito Shop",
  description: "A melhor loja de pirulitos da web!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AuthProvider>
          <FavoritesProvider>
            <Header />

            {/* A classe de cor deve corresponder ao nome definido no tailwind.config.ts */}
            <main className="ml-64 min-h-screen bg-[var(--cor-creme-fundo)]">
              {children}
            </main>

          </FavoritesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
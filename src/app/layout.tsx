import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


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

        
            <main className="min-h-screen ml-64 bg-gradient-to-br from-pink-50 via-purple-50 to-sky-100">
              {children}
            </main>

          </FavoritesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
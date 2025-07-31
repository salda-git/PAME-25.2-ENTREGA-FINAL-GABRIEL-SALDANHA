import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { AuthProvider } from "./context/AuthContext";

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

            <main className="ml-64">
              {children}
            </main>

          </FavoritesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

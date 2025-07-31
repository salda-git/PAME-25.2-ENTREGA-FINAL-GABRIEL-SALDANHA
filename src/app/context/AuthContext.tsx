// src/contexts/AuthContext.tsx
"use client";

import { createContext, useState, useContext, ReactNode } from 'react';

// Dados mockados do usuário que fará o "login"
const mockUser = {
    name: "Ana Clara",
    email: "ana.clara@email.com",
};

interface AuthContextType {
    isAuthenticated: boolean;
    user: { name: string; email: string; } | null;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<{ name: string; email: string; } | null>(null);

    // Função que simula o login
    const login = () => {
        setIsAuthenticated(true);
        setUser(mockUser);
    };

    // Função que simula o logout
    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
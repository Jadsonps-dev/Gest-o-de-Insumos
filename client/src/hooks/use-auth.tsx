// src/hooks/use-auth.tsx
import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  user: { username: string; companyId: number } | null;
  company: { name: string } | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user] = useState({
    username: "Jadson",
    companyId: 1,
  });
  const [company] = useState({
    name: "Luft Solutions",
  });

  const login = () => {};
  const logout = () => {};

  return (
    <AuthContext.Provider value={{ user, company, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return context;
}
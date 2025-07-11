// src/hooks/AuthProvider.tsx ou src/context/AuthProvider.tsx
import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  user: { username: string; companyId: number } | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{
    username: string;
    companyId: number;
  } | null>({
    username: "Jadson",
    companyId: 1,
  });

  const login = () => setUser({ username: "Jadson", companyId: 1 });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return context;
}

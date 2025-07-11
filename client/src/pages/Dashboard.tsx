import {
  Home,
  Package,
  ArrowUp,
  ArrowDown,
  BarChart3,
  User,
  LogOut,
  Warehouse,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export default function Sidebar({ currentView, setCurrentView }: SidebarProps) {
  const { company, logout } = useAuth();

  const navigation = [
    { name: "Dashboard", id: "dashboard", icon: Home },
    { name: "Entrada", id: "entrada", icon: ArrowUp },
    { name: "Estoque", id: "estoque", icon: Package },
    { name: "Saída", id: "saida", icon: ArrowDown },
  ];

  return (
    <div className="flex flex-col h-full bg-white shadow-lg">
      {/* Logo e conteúdo do sidebar... */}
    </div>
  );
}

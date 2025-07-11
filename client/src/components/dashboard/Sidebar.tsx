import {
  Home,
  Package,
  ArrowUp,
  ArrowDown,
  BarChart3,
  Settings,
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
    { name: "Relatórios", id: "relatorios", icon: BarChart3 },
  ];

  return (
    <div className="flex flex-col h-full bg-white shadow-lg">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 bg-luft-blue">
        <div className="flex items-center">
          <Warehouse className="h-8 w-8 text-white mr-3" />
          <span className="text-white text-xl font-semibold">
            Luft Solutions
          </span>
        </div>
      </div>

      {/* Company info */}
      <div className="px-4 py-3 border-b border-gray-200">
        <p className="text-sm text-gray-600">Empresa</p>
        <p className="text-sm font-medium text-gray-900">
          {company?.name || "Empresa"}
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
              currentView === item.id
                ? "bg-luft-blue text-white shadow-lg"
                : "text-gray-700 hover:bg-luft-blue/10 hover:text-luft-blue"
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </button>
        ))}
      </nav>

      {/* User info and logout */}
      <div className="px-4 py-4 border-t border-gray-200 space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <User className="h-4 w-4 mr-2" />
          <span>Configurações</span>
        </div>
        <Button
          variant="ghost"
          onClick={logout}
          className="w-full justify-start text-gray-700 hover:bg-red-50 hover:text-red-700"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sair
        </Button>
      </div>
    </div>
  );
}

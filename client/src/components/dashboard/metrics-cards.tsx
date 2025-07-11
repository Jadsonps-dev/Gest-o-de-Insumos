// src/components/dashboard/metrics-cards.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ArrowUp, ArrowDown } from "lucide-react";

export function MetricsCards({ metrics }: { metrics: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* Total de Produtos */}
      <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Total de Produtos</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-600">{metrics.totalProducts}</div>
        </CardContent>
      </Card>

      {/* Entradas Hoje */}
      <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Entradas Hoje</CardTitle>
          <ArrowUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">{metrics.entriesToday}</div>
        </CardContent>
      </Card>

      {/* Saídas Hoje */}
      <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Saídas Hoje</CardTitle>
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-600">{metrics.exitsToday}</div>
        </CardContent>
      </Card>

      {/* Valor Total */}
      <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-l-4 border-yellow-500">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Valor Total</CardTitle>
          <span className="text-xl">$</span>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-yellow-600">
            R$ {(metrics.totalValue / 100).toFixed(2)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
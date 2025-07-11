// src/components/dashboard/InventoryTable.tsx
import React from "react";

export const InventoryTable = ({ products, isLoading }: any) => {
  if (isLoading) return <div>Carregando produtos...</div>;

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produto</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Localização</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products?.map((product: any) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
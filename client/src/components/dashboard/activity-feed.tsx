// src/components/dashboard/ActivityFeed.tsx
import React from "react";

export const ActivityFeed = ({ activity, isLoading }: any) => {
  if (isLoading) return <div>Carregando atividades...</div>;

  return (
    <div className="space-y-4">
      {activity?.map((item: any) => (
        <div key={item.id} className="flex items-start space-x-3">
          <div className="mt-1">
            {item.type === "entrada" ? (
              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
            ) : (
              <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
            )}
          </div>
          <div>
            <p className="text-sm font-medium">{item.product}</p>
            <p className="text-xs text-gray-500">{item.user} • {item.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
};